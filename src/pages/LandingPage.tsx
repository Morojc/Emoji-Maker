import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const history = useHistory();

  const handleTryForFree = () => {
    history.push('/home');
  };

  return (
    <IonPage className="landing-page">
      <IonContent fullscreen>
        <div className="content-container">
          <header>
            <div className="logo">Lando</div>
          </header>
          <main>
            <div className="trial-text">FREE 30 DAYS TRIAL</div>
            <h1>The best way to showcase your project.</h1>
            <p className="description">
              Here you can put a short description about your project.
            </p>
            <IonButton className="try-button" expand="block" onClick={handleTryForFree}>
              Try for free
            </IonButton>
            <button className="see-how-button">See how it works</button>
          </main>
          <footer>
            <p className="trust-text">
              Trusted by individuals and teams at the world's best companies
            </p>
          </footer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
