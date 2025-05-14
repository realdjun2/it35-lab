import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonImg,
    IonIcon,
    IonButton,
    useIonToast,
    IonSpinner
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { uploadImageToSupabase } from '../utils/imageUpload';
import './Favorites.css';

interface FavoriteItem {
    id: string;
    name: string;
    description: string;
    image_url: string;
}

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
    const [loading, setLoading] = useState<string | null>(null); // Stores ID of item being updated
    const [present] = useIonToast();

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        try {
            const { data, error } = await supabase
                .from('favorites')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setFavorites(data || []);
        } catch (error) {
            console.error('Error fetching favorites:', error);
            present({
                message: 'Error loading favorites',
                duration: 2000,
                color: 'danger'
            });
        }
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, itemId: string) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setLoading(itemId);
            
            // Upload image to Supabase storage
            const imageUrl = await uploadImageToSupabase(file);
            
            if (!imageUrl) {
                throw new Error('Failed to upload image');
            }

            // Update the favorite item with new image URL
            const { error: updateError } = await supabase
                .from('favorites')
                .update({ image_url: imageUrl })
                .eq('id', itemId);

            if (updateError) throw updateError;

            // Refresh favorites list
            await fetchFavorites();
            
            present({
                message: 'Image uploaded successfully!',
                duration: 2000,
                color: 'success'
            });
        } catch (error) {
            console.error('Error uploading image:', error);
            present({
                message: 'Failed to upload image',
                duration: 2000,
                color: 'danger'
            });
        } finally {
            setLoading(null);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Favorites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding favorites-content">
                {favorites.map((item) => (
                    <IonCard key={item.id} className="favorite-card">
                        <div className="image-container">
                            <IonImg 
                                src={item.image_url || '/assets/placeholder-food.jpg'} 
                                alt={item.name} 
                                className={`food-image ${loading === item.id ? 'loading' : ''}`}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                id={`file-input-${item.id}`}
                                onChange={(e) => handleImageUpload(e, item.id)}
                                style={{ display: 'none' }}
                            />
                            <label 
                                htmlFor={`file-input-${item.id}`}
                                className="upload-overlay"
                            >
                                {loading === item.id ? (
                                    <IonSpinner name="crescent" />
                                ) : (
                                    <IonIcon icon={camera} />
                                )}
                            </label>
                        </div>
                        <IonCardContent>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Favorites; 