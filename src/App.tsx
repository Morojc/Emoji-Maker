import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { closeOutline, homeOutline, informationCircleOutline, mailOutline, peopleOutline } from 'ionicons/icons';
import { menuController } from '@ionic/core';
import HomePage from './pages/HomePage';

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

  const menuItems = [
    { title: 'Home', route: '/home', icon: homeOutline },
    { title: 'About', route: '/about', icon: informationCircleOutline },
    { title: 'Info', route: '/info', icon: peopleOutline },
    { title: 'Contact', route: '/contact', icon: mailOutline },
  ];

  const handleMenuItemClick = (route: string) => {
    setSelectedPage(route.substring(1));
    menuController.close();
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonMenu contentId="main" type="overlay" className="creative-menu">
            <IonHeader className="ion-no-border">
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
                    <IonIcon icon={item.icon} slot="start" />
                    <IonLabel>{item.title}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonContent>
          </IonMenu>

          <IonRouterOutlet id="main">
            <Route path="/home" component={HomePage} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
