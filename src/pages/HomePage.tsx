import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { statsChartOutline, personOutline, alertCircleOutline, documentTextOutline, hardwareChipOutline, chatbubbleOutline } from 'ionicons/icons';

const HomePage: React.FC = () => {
  const [userInput, setUserInput] = useState('');

  const handleGenerate = () => {
    // TODO: Implement generation logic
    console.log('Generating content for:', userInput);
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>
              <IonIcon slot="start" icon={statsChartOutline} />
              <IonLabel>My Summary</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={personOutline} />
              <IonLabel>Account Information</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={alertCircleOutline} />
              <IonLabel>BG levels & Alerts</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={documentTextOutline} />
              <IonLabel>Export Report</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={hardwareChipOutline} />
              <IonLabel>Devices</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={chatbubbleOutline} />
              <IonLabel>Report an Issue</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Emoji Generator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid style={{ height: '100%' }}>
            <IonRow class="ion-align-items-center" style={{ height: '100%' }}>
              <IonCol size="12" sizeMd="8" sizeLg="6" offsetMd="2" offsetLg="3">
                <IonItem>
                  <IonInput
                    value={userInput}
                    placeholder="Enter your text here"
                    onIonChange={e => setUserInput(e.detail.value!)}
                  ></IonInput>
                  <IonButton onClick={handleGenerate}>Generate</IonButton>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomePage;
