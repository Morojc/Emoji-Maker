import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EmojiGrid from '../components/EmojiGrid';

const GeneratedEmojisPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Generated Emojis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <EmojiGrid emojis={[]} />
      </IonContent>
    </IonPage>
  );
};

export default GeneratedEmojisPage;
