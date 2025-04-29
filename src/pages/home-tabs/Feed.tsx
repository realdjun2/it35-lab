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
  { id: 1, title: "No Poverty", img: "poverty.jpg", desc: "End poverty in all its forms everywhere." },
  { id: 2, title: "Zero Hunger", img: "hunger.jpg", desc: "End hunger, achieve food security, and improve nutrition." },
  { id: 3, title: "Good Health & Well-being", img: "health.jpg", desc: "Ensure healthy lives and promote well-being for all ages." },
  { id: 4, title: "Quality Education", img: "education.jpg", desc: "Ensure inclusive and equitable quality education." },
  { id: 5, title: "Gender Equality", img: "gender.jpg", desc: "Achieve gender equality and empower all women and girls." },
  { id: 6, title: "Clean Water & Sanitation", img: "water.jpg", desc: "Ensure availability and sustainable management of water." },
  { id: 7, title: "Affordable & Clean Energy", img: "energy.jpg", desc: "Ensure access to affordable, reliable, sustainable energy." },
  { id: 8, title: "Decent Work & Economic Growth", img: "work.jpg", desc: "Promote sustained, inclusive, and sustainable economic growth." },
  { id: 9, title: "Industry, Innovation & Infrastructure", img: "industry.jpg", desc: "Build resilient infrastructure and promote innovation." },
  { id: 10, title: "Reduced Inequalities", img: "inequality.jpg", desc: "Reduce inequality within and among countries." },
  { id: 11, title: "Sustainable Cities & Communities", img: "cities.jpg", desc: "Make cities and human settlements inclusive and sustainable." },
  { id: 12, title: "Responsible Consumption & Production", img: "consumption.jpg", desc: "Ensure sustainable consumption and production patterns." },
  { id: 13, title: "Climate Action", img: "climate.jpg", desc: "Take urgent action to combat climate change." },
  { id: 14, title: "Life Below Water", img: "waterlife.jpg", desc: "Conserve and sustainably use oceans and marine resources." },
  { id: 15, title: "Life on Land", img: "landlife.jpg", desc: "Protect, restore, and promote sustainable ecosystems." },
  { id: 16, title: "Peace, Justice & Strong Institutions", img: "justice.jpg", desc: "Promote peaceful and inclusive societies." },
  { id: 17, title: "Partnerships for the Goals", img: "partnership.jpg", desc: "Strengthen global partnerships for sustainable development." },
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>SDG Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {sdgs.map((sdg) => (
          <IonCard key={sdg.id} className="ion-margin-bottom">
            <img alt={sdg.title} src={sdg.img} />
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
