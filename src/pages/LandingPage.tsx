import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const NewPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Welcome to the New Page!</h2>
      </IonContent>
    </IonPage>
  );
};

export default NewPage;
