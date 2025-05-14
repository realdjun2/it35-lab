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
    IonList,
    IonIcon,
    IonChip
} from '@ionic/react';
import { logoGithub, logoLinkedin, mailOutline, codeSlash, serverOutline, phonePortraitOutline } from 'ionicons/icons';
import './About.css';

const About: React.FC = () => {
  const openGitHub = () => {
    window.open('https://github.com/realdjun2', '_blank');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding about-content">
        <div className="background-animation"></div>
        <IonCard className="profile-card">
          <IonCardContent>
            <div className="profile-container">
              <div className="profile-header">
                <img 
                  src="https://avatars.githubusercontent.com/u/realdjun2" 
                  alt="Realdjun Odon" 
                  className="profile-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://ui-avatars.com/api/?name=Realdjun+Odon&background=random&size=200';
                  }}
                />
                <h2>Realdjun Odon</h2>
                <p className="title">Full Stack Developer</p>
                
                <div className="social-links">
                  <IonChip color="primary" onClick={openGitHub} className="clickable-chip" title="Visit my GitHub profile">
                    <IonIcon icon={logoGithub} />
                    <IonLabel>GitHub</IonLabel>
                  </IonChip>
                  <IonChip color="primary">
                    <IonIcon icon={logoLinkedin} />
                    <IonLabel>LinkedIn</IonLabel>
                  </IonChip>
                  <IonChip color="primary">
                    <IonIcon icon={mailOutline} />
                    <IonLabel>Email</IonLabel>
                  </IonChip>
                </div>

                <p className="bio">
                  Innovative Full Stack Developer with a passion for creating seamless, 
                  user-centric applications. Specialized in modern web technologies and 
                  cross-platform development using Ionic Framework and React. 
                  Committed to delivering high-quality, scalable solutions that drive business success.
                </p>
              </div>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="skills-card">
          <IonCardHeader>
            <IonCardTitle>Skills & Expertise</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem lines="full">
                <IonIcon icon={codeSlash} slot="start" className="skill-icon" />
                <IonLabel>
                  <h3>Frontend Development</h3>
                  <p>React, Ionic Framework, TypeScript, HTML5/CSS3, Material-UI</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="full">
                <IonIcon icon={serverOutline} slot="start" className="skill-icon" />
                <IonLabel>
                  <h3>Backend Development</h3>
                  <p>Node.js, Express, RESTful APIs, MongoDB, SQL, Firebase</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="full">
                <IonIcon icon={phonePortraitOutline} slot="start" className="skill-icon" />
                <IonLabel>
                  <h3>Mobile Development</h3>
                  <p>Ionic React, Progressive Web Apps, Cross-platform Development</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;