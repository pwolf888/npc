import {
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
    IonIcon,
    IonText,
    IonGrid
} from '@ionic/react';
import {chevronBack} from 'ionicons/icons';
import InstantCharcterGen from '../components/InstantCharGen';

import React, {useState} from 'react';
import './Home.css';
import syllables from "../data/syllables.json";

const Town : React.FC = () => {

    const [generateChar,
        setGenerateChar] = useState < boolean > (false)

    return (
        <IonPage >
            <IonContent >

            <div className="npc-page-bg" >
                <div className="npc-toolbar ion-justify-content-between ">
                        <IonButton size="large" fill="clear" color="dark" href="/">
                            <IonIcon icon={chevronBack}/>
                        </IonButton>
                        <IonButton size="large" fill="clear" color="dark" >
                            <IonText >
                                <p>Town</p>
                            </IonText>
                        </IonButton>
                    </div>
                    <IonGrid>
                    <InstantCharcterGen 
                        start={syllables[0].start}
                        middle={syllables[0].middle}
                        end={syllables[0].end}
                        display="town"/>

                    </IonGrid>
               </div>

            </IonContent>
        </IonPage>
    );
};

export default Town;
