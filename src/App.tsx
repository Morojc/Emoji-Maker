import React, { useState } from 'react';
import { IonApp, IonContent, IonMenu, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, IonIcon, IonFooter, IonInput, setupIonicReact } from '@ionic/react';
import { closeOutline, menuOutline, sendOutline } from 'ionicons/icons';
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

  const handleSendMessage = () => {
    console.log('Sending message:', inputText);
    setInputText('');
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
              <IonMenuButton>
                <IonIcon icon={menuOutline} />
              </IonMenuButton>
            </IonButtons>
            <IonTitle>{menuItems.find(item => item.route.substring(1) === selectedPage)?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonInput
            value={inputText}
            placeholder="Type a message"
            onIonChange={e => setInputText(e.detail.value!)}
            className="message-input"
          ></IonInput>
          <IonButtons slot="end">
            <IonButton onClick={handleSendMessage}>
              <IonIcon icon={sendOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
};

export default App;
