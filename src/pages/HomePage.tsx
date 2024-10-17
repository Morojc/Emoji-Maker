import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Emoji Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to Emoji Generator</h2>
        <p>Start generating custom emojis based on your descriptions!</p>
        {/* Add more content or components here */}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
