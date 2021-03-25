import {IonButton, IonIcon, IonLabel, IonBadge, IonGrid,IonRow,IonCol, CreateAnimation, IonText} from "@ionic/react";
import { personCircle } from 'ionicons/icons';

const InstantCharcterGen: React.FC = () => {
  return (
    
    <IonGrid  className="ion-text-center"> 
        <IonRow>
            <IonCol size="12">
                <IonIcon size="large" icon={personCircle}/>
                <IonText><h1>Gragnar Rothesworne</h1></IonText>
                
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="12">
            <IonBadge color="success">
                    <IonLabel>
                        <h2>Orc</h2>
                    </IonLabel>
                </IonBadge>
                </IonCol>
                <IonCol size="12">
                <IonBadge color="success">
                    <IonLabel>
                        <h2>Blacksmith</h2>
                    </IonLabel>
                </IonBadge>
                </IonCol>
                <IonCol size="12">
                <IonBadge color="success">
                    <IonLabel>
                        <h2>Sassy</h2>
                    </IonLabel>
                </IonBadge>
            </IonCol>
        </IonRow>
    </IonGrid>
   
  )

};

export default InstantCharcterGen;