import {IonContent, IonHeader, IonPage, IonButton, IonIcon} from '@ionic/react';
import {home, personAdd, boat} from 'ionicons/icons';
import InstantCharcterGen from '../components/InstantCharGen';
import ToolBar from '../components/ToolBar';
import React, {useState} from 'react'
import './Home.css'
import syllables from "../data/syllables.json"
const Home : React.FC = () => {

    const [generateChar,
        setGenerateChar] = useState < boolean > (false)

    return (
        <IonPage >
            <IonContent >
               <div className="npc-page-bg">

               
                    <div className="npc-main-content">

                        <InstantCharcterGen
                            start={syllables[0].start}
                            middle={syllables[0].middle}
                            end={syllables[0].end}
                            display="single"
                            />
                        <div className="npc-toolbar">
                            <IonButton size="large" fill="clear" color="dark">
                                <IonIcon icon={boat}/>
                            </IonButton>
                            <IonButton size="large" fill="clear" color="dark" href="/Town">
                                <IonIcon icon={home}/>
                            </IonButton>
                            <IonButton size="large" fill="clear" color="dark" onClick={() => setGenerateChar(!generateChar)}>
                                <IonIcon icon={personAdd}/>
                            </IonButton>
                        </div>
                    </div>
                    </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
