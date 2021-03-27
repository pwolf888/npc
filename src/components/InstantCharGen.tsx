import {
    IonButton,
    IonIcon,
    IonLabel,
    IonBadge,
    IonGrid,
    IonRow,
    IonCol,
    CreateAnimation,
    IonText
} from "@ionic/react";
import {personCircle} from 'ionicons/icons';
import names from "../data/name.json"
import React, {useState} from 'react';

interface ContainerProps {

    generate: boolean

}

const InstantCharcterGen : React.FC<ContainerProps> = ({generate}) => {

    console.log(generate)
    console.log(names)

    const [firstName, setFirstName] = useState<string>("gagnar")

    const races : Array < string > = [
        "Dragonborn",
        "Dwarf",
        "Elf",
        "Gnome",
        "Half-Elf",
        "Halfling",
        "Half-Orc",
        "Human",
        "Tiefling"
    ]

    const nature : Array < string > = [
        "Adamant",
        "Bashful",
        "Bold",
        "Brave",
        "Calm",
        "Careful",
        "Docile",
        "Gentle",
        "Hardy",
        "Hasty",
        "Impish",
        "Jolly",
        "Lax",
        "Lonely",
        "Mild",
        "Modest",
        "Naive",
        "Naughty",
        "Quiet",
        "Quirky",
        "Rash",
        "Relaxed",
        "Sassy",
        "Serious",
        "Timid"
    ]

    const randomNumber = (max: number) => {
        return Math.floor(Math.random() * max )
    } 


    const generateFirstName = () => {
        // const start = names[0].start[randomNumber(10)]
        // const middle = names[1].middle[randomNumber(10)]
        // const end = names[2].end[randomNumber(10)]
        
        // setFirstName(start+middle+end)
    }
    

    // console.log(names[0].start[randomNumber(10)]+names[1].middle[randomNumber(10)]+names[2].end[randomNumber(10)])
    
    return (

        <IonGrid className="ion-text-center">
            <IonRow>
                <IonCol size="12">
                    <IonIcon size="large" icon={personCircle}/>
                    <IonText className="ion-text-capitalize">
                        <h1>{firstName} Rothesworne</h1>
                    </IonText>

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