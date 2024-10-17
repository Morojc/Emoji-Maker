import React, { useState } from 'react';
import { IonApp, IonContent, IonMenu, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, IonIcon, IonFooter, IonInput, setupIonicReact } from '@ionic/react';
import { closeOutline, attachOutline, sendOutline, refreshOutline } from 'ionicons/icons';
import { menuController } from '@ionic/core';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/menu.css';

setupIonicReact();

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [inputText, setInputText] = useState('');

  const menuItems = [
    { title: 'Home', route: '/home' },
    { title: 'About', route: '/about' },
    { title: 'Info', route: '/info' },
    { title: 'Contact', route: '/contact' },
  ];

  const handleMenuItemClick = (route: string) => {
    setSelectedPage(route.substring(1));
    menuController.close();
  };

  const handleGenerateMessage = () => {
    console.log('Generating message:', inputText);
    setInputText('');
  };

  const handleFileUpload = () => {
    console.log('File upload clicked');
    // Implement file upload logic here
  };

  const handleReset = () => {
    console.log('Reset clicked');
    // Implement reset functionality here
  };

  return (
    <IonApp>
      <IonMenu contentId="main" className="simple-menu" side="start" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => menuController.close()}>
                <IonIcon icon={closeOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="none">
            {menuItems.map((item, index) => (
              <IonItem 
                key={index} 
                className={`menu-item ${selectedPage === item.route.substring(1) ? 'selected' : ''}`}
                onClick={() => handleMenuItemClick(item.route)}
              >
                <IonLabel>{item.title}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
      <IonContent id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton className="custom-menu-button creative-menu-button">
                <div className="menu-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </IonMenuButton>
            </IonButtons>
            <IonTitle className="ion-text-center">
              {/* You can add a title here if needed */}
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={handleReset} className="reset-button">
                <div className="reset-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                  </svg>
                </div>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <IonFooter>
        <div className="input-container">
          <IonButton fill="clear" className="attach-button">
            <IonIcon icon={attachOutline} />
          </IonButton>
          <IonInput
            value={inputText}
            placeholder="Message"
            onIonChange={e => setInputText(e.detail.value!)}
            className="message-input"
          ></IonInput>
          <IonButton fill="clear" className="send-button" onClick={handleGenerateMessage}>
            <IonIcon icon={sendOutline} />
          </IonButton>
        </div>
      </IonFooter>
    </IonApp>
  );
};

export default App;
