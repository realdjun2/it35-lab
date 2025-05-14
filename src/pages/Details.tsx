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
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonIcon,
    IonBadge,
    IonRippleEffect
} from '@ionic/react';
import { 
  star,
  starOutline,
  logoGithub,
  logoNpm,
  logoReact,
  logoAngular,
  logoVue,
  logoJavascript,
  colorPalette,
  layers,
  flash,
  rocket,
  phonePortrait,
  grid,
  cube,
  terminal
} from 'ionicons/icons';
import './Details.css';

const Details: React.FC = () => {
  const favoriteFrameworks = [
    { name: 'Ionic', icon: cube, description: 'Modern mobile UI toolkit', rating: 5 },
    { name: 'React', icon: logoReact, description: 'JavaScript library for UI', rating: 5 },
    { name: 'TypeScript', icon: logoJavascript, description: 'Typed JavaScript', rating: 4 },
    { name: 'Angular', icon: logoAngular, description: 'Platform for web apps', rating: 4 },
    { name: 'Vue', icon: logoVue, description: 'Progressive JavaScript framework', rating: 4 }
  ];

  const ionicFeatures = [
    { name: 'UI Components', icon: grid, description: 'Beautiful, modern UI components that work everywhere' },
    { name: 'Native Access', icon: phonePortrait, description: 'Access native device features with ease' },
    { name: 'Performance', icon: flash, description: 'Optimized for maximum speed and efficiency' },
    { name: 'Theming', icon: colorPalette, description: 'Powerful theming system for customization' },
    { name: 'CLI Tools', icon: terminal, description: 'Robust command-line interface tools' },
    { name: 'Ecosystem', icon: layers, description: 'Rich ecosystem of plugins and tools' }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <IonIcon 
        key={index} 
        icon={index < rating ? star : starOutline} 
        className={`star-icon ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>My Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding favorites-content">
        <div className="page-container">
          {/* Favorite Frameworks */}
          <section className="section-container">
            <h2 className="section-title">
              <IonIcon icon={rocket} />
              Favorite Technologies
            </h2>
            <div className="frameworks-grid">
              {favoriteFrameworks.map((framework, index) => (
                <IonCard key={index} className="framework-card ion-activatable ripple-parent">
                  <IonRippleEffect></IonRippleEffect>
                  <IonCardContent className="framework-content">
                    <IonIcon icon={framework.icon} className="framework-icon" />
                    <h3>{framework.name}</h3>
                    <p>{framework.description}</p>
                    <div className="rating">
                      {renderStars(framework.rating)}
                    </div>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          </section>

          {/* Ionic Features */}
          <section className="section-container">
            <h2 className="section-title">
              <IonIcon icon={cube} />
              Favorite Ionic Features
            </h2>
            <div className="features-grid">
              {ionicFeatures.map((feature, index) => (
                <IonCard key={index} className="feature-card ion-activatable ripple-parent">
                  <IonRippleEffect></IonRippleEffect>
                  <IonCardContent className="feature-content">
                    <div className="feature-icon-container">
                      <IonIcon icon={feature.icon} />
                    </div>
                    <div className="feature-text">
                      <h3>{feature.name}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section className="section-container">
            <h2 className="section-title">
              <IonIcon icon={layers} />
              Useful Resources
            </h2>
            <div className="resources-list">
              <IonCard className="resource-card ion-activatable ripple-parent">
                <IonRippleEffect></IonRippleEffect>
                <IonItem lines="none" detail={true} href="https://ionicframework.com/docs" target="_blank">
                  <IonIcon icon={logoGithub} slot="start" />
                  <IonLabel>
                    <h3>Ionic Documentation</h3>
                    <p>Official documentation and guides</p>
                  </IonLabel>
                </IonItem>
              </IonCard>

              <IonCard className="resource-card ion-activatable ripple-parent">
                <IonRippleEffect></IonRippleEffect>
                <IonItem lines="none" detail={true} href="https://github.com/ionic-team/ionic-framework" target="_blank">
                  <IonIcon icon={logoNpm} slot="start" />
                  <IonLabel>
                    <h3>GitHub Repository</h3>
                    <p>Source code and contributions</p>
                  </IonLabel>
                </IonItem>
              </IonCard>
            </div>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Details;