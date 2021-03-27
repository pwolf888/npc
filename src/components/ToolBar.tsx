
import {IonButton, IonIcon, IonLabel, IonBadge} from "@ionic/react";
import { home, personAdd, toggle} from 'ionicons/icons';

interface ContainerProps {
  generate : boolean
}

const ToolBar: React.FC<ContainerProps> = ({generate}) => {
  console.log(generate)
  return (
    <div className="npc-toolbar">
    
      <IonButton>
          <IonIcon icon={home} />
      </IonButton>
      <IonButton onClick={()=> !generate}>
          <IonIcon icon={personAdd} />
      </IonButton>
    </div>
  )

};

export default ToolBar;