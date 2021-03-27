import {IonContent, IonHeader, IonPage, IonButton, IonIcon} from '@ionic/react';
import { home, personAdd, toggle} from 'ionicons/icons';
import InstantCharcterGen from '../components/InstantCharGen';
import ToolBar from '../components/ToolBar';
import React, {useState} from 'react'
import './Home.css'

const Home : React.FC = () => {

    const [generateChar,
        setGenerateChar] = useState < boolean > (false)

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="npc-main-content">

                    <InstantCharcterGen generate={generateChar}/>
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
