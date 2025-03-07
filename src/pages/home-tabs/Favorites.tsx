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
          <IonCardHeader>
            <IonCardTitle>Pizza</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Delicious cheesy pizza with various toppings.</IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sushi</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Fresh and tasty sushi rolls with soy sauce.</IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Burger</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Juicy beef burger with lettuce, tomato, and cheese.</IonCardContent>
        </IonCard>

        <IonCard>
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
