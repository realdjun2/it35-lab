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
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonCard>
          <img alt="Ionic Framework" src="https://source.unsplash.com/400x300/?ionic,app" />
          <IonCardHeader>
            <IonCardTitle>Ionic Framework</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Build fast, beautiful mobile and web apps with one codebase using Ionic and web technologies.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Supabase" src="https://source.unsplash.com/400x300/?database,cloud" />
          <IonCardHeader>
            <IonCardTitle>Supabase</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            An open-source Firebase alternative providing real-time databases, authentication, and storage.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="UI Design" src="https://source.unsplash.com/400x300/?ui,design" />
          <IonCardHeader>
            <IonCardTitle>UI Design</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Crafting intuitive and appealing interfaces that enhance user experience and usability.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="UX Strategy" src="https://source.unsplash.com/400x300/?ux,user-experience" />
          <IonCardHeader>
            <IonCardTitle>UX Strategy</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Aligning user needs with business goals to create meaningful and effective user journeys.
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Favorites;
