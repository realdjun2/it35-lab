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
  IonToolbar,
} from '@ionic/react';

const sdgs = [
  { id: 1, title: "No Poverty", desc: "End poverty in all its forms everywhere." },
  { id: 2, title: "Zero Hunger", desc: "End hunger, achieve food security, and improve nutrition." },
  { id: 3, title: "Good Health & Well-being", desc: "Ensure healthy lives and promote well-being for all ages." },
  { id: 4, title: "Quality Education", desc: "Ensure inclusive and equitable quality education." },
  { id: 5, title: "Gender Equality", desc: "Achieve gender equality and empower all women and girls." },
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {sdgs.map((sdg) => (
          <IonCard key={sdg.id} className="ion-margin-bottom">
            <IonCardHeader>
              <IonCardTitle>{sdg.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{sdg.desc}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
