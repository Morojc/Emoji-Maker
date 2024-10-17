import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

interface EmojiFormProps {
  onSubmit: (prompt: string) => void;
}

const EmojiForm: React.FC<EmojiFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <IonItem>
        <IonLabel position="floating">Enter prompt for emoji</IonLabel>
        <IonInput
          value={prompt}
          onIonChange={(e) => setPrompt(e.detail.value!)}
          required
        />
      </IonItem>
      <IonButton expand="block" type="submit">Generate Emoji</IonButton>
    </form>
  );
};

export default EmojiForm;
