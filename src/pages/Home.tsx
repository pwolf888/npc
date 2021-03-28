import {IonContent, IonHeader, IonPage, IonButton, IonIcon} from '@ionic/react';
import { home, personAdd, toggle} from 'ionicons/icons';
import InstantCharcterGen from '../components/InstantCharGen';
import ToolBar from '../components/ToolBar';
import React, {useState} from 'react'
import './Home.css'
import syllables from "../data/syllables.json"
const Home : React.FC = () => {

    const [generateChar,
        setGenerateChar] = useState < boolean > (false)

       
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="npc-main-content">

                    <InstantCharcterGen start={syllables[0].start} middle={syllables[0].middle} end={syllables[0].end} generate={generateChar}/>
                    <div className="npc-toolbar">
                    <IonButton>
                        <IonIcon icon={home}/>
                    </IonButton>
                    <IonButton onClick={() => setGenerateChar(!generateChar)}>
                        <IonIcon icon={personAdd}/>
                    </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
