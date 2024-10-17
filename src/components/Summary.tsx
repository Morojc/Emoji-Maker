import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

const Summary: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>BG level</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div>Time in target</div>
              <h2>77%</h2>
              <div>Good</div>
              <div>20% Border</div>
              <div>3% Hyper, Hypo</div>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Est. A1C</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h2>6.9%</h2>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Low BG events</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h2>1</h2>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Avg. BG</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h2>134.8</h2>
              <div>mg/dL</div>
              <div>via Dexcom</div>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>High BG events</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h2>2</h2>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Water avg</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h2>1250</h2>
              <div>mL</div>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Summary;
