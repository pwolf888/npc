import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InstantCharcterGen from '../components/InstantCharGen';

import ToolBar from '../components/ToolBar';
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="npc-main-content">
          
          <InstantCharcterGen />

          <ToolBar />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
