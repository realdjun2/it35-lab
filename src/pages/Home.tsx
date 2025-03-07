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
    import { IonReactRouter } from '@ionic/react-router';
    import { bookOutline, search, star } from 'ionicons/icons';
    import { Route, Redirect } from 'react-router';
    
    import Favorites from './home-tabs/Favorites';
    import Feed from './home-tabs/Feed';
    import Search from './home-tabs/Search';
      
      const Home: React.FC = () => {
    
        const tabs = [
          {name:'Feed', tab:'feed',url: '/it35-lab/app/home/feed', icon: bookOutline},
          {name:'Search', tab:'search', url: '/it35-lab/app/home/search', icon: search},
          {name:'Favorites',tab:'favorites', url: '/it35-lab/app/home/favorites', icon: star},
        ]
  
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