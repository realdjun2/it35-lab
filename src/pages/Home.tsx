import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonLabel, 
      IonMenuButton, 
      IonPage, 
      IonRouterOutlet, 
      IonTabBar, 
      IonTabButton, 
      IonTabs, 
      IonTitle, 
      IonToolbar  
  } from '@ionic/react';
  
  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;