import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img alt="Pizza" src="https://source.unsplash.com/400x300/?pizza" />
          <IonCardHeader>
            <IonCardTitle>Pizza</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Delicious cheesy pizza with various toppings.</IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Sushi" src="https://source.unsplash.com/400x300/?sushi" />
          <IonCardHeader>
            <IonCardTitle>Sushi</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Fresh and tasty sushi rolls with soy sauce.</IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Burger" src="https://source.unsplash.com/400x300/?burger" />
          <IonCardHeader>
            <IonCardTitle>Burger</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Juicy beef burger with lettuce, tomato, and cheese.</IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Pasta" src="https://source.unsplash.com/400x300/?pasta" />
          <IonCardHeader>
            <IonCardTitle>Pasta</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Creamy and flavorful pasta dishes.</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
