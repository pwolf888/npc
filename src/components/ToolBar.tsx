
import {IonButton, IonIcon, IonLabel, IonBadge} from "@ionic/react";
import { home, personAdd} from 'ionicons/icons';

const ToolBar: React.FC = () => {
  return (
    <div className="npc-toolbar">
    
      <IonButton>
          <IonIcon icon={home} />
      </IonButton>
      <IonButton>
          <IonIcon icon={personAdd} />
      </IonButton>
    </div>
  )

};

export default ToolBar;