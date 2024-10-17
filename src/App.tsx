import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, informationCircleOutline, alertCircleOutline, documentTextOutline, hardwareChipOutline, chatbubbleEllipsesOutline } from 'ionicons/icons';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';

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

setupIonicReact();

const HomePageWrapper: React.FC = () => {
  useEffect(() => {
    console.log('HomePage component mounted');
  }, []);

  return <HomePage />;
};

const App: React.FC = () => {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonMenu contentId="main">
            <IonContent>
              <IonList>
                <IonItem routerLink="/home" routerDirection="none">
                  <IonIcon icon={homeOutline} slot="start" />
                  <IonLabel>My Summary</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon icon={informationCircleOutline} slot="start" />
                  <IonLabel>Account Information</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon icon={alertCircleOutline} slot="start" />
                  <IonLabel>BG levels & Alerts</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon icon={documentTextOutline} slot="start" />
                  <IonLabel>Export Report</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon icon={hardwareChipOutline} slot="start" />
                  <IonLabel>Devices</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon icon={chatbubbleEllipsesOutline} slot="start" />
                  <IonLabel>Report an Issue</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route exact path="/home" render={() => <HomePageWrapper />} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
