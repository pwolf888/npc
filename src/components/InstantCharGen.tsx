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



interface ContainerProps {

    start: string[],
    middle: string[]
    end: string[]
    display: string
}

const InstantCharcterGen : React.FC<ContainerProps> = ({start,middle,end, display}) => {
    
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

    // https://juliahwest.com/prompts/fantasy_job_list.html
    const jobs: Array<string> = [
        "Actor",
        "Advocate (lawyer)",
        "Alchemist",
        "Animal handler",
        "Apothecary",
        "Architect",
        "Archer",
        "Archivist",
        "Aristocrat",
        "Armorer",
        "Artisan",
        "Artist",
        "Astrologer",
        "Baker",
        "Banker",
        "Barbarian",
        "Barber",
        "Bard",
        "Barkeep",
        "Barmaid",
        "Beekeeper",
        "Beer seller",
        "Beggar",
        "Blacksmith",
        "Boatman",
        "Bookbinder",
        "Bookseller",
        "Brewer",
        "Bricklayer",
        "Brick maker",
        "Brigand",
        "Brothel keeper",
        "Buckle maker",
        "Builder",
        "Butcher",
        "Caravan Leader",
        "Carpenter",
        "Cartographer",
        "Chandler",
        "Charioteer",
        "Chatelaine",
        "Chef",
        "Chieftain",
        "Chirurgeon",
        "Clergyman",
        "Clerk",
        "Clock maker",
        "Clothworker",
        "Cobbler",
        "Commander",
        "Concubine",
        "Cook",
        "Cooper",
        "Copyist",
        "Costermonger",
        "Counselor",
        "Courtesan",
        "Courtier",
        "Cowherd",
        "Crossbowman",
        "Cutler",
        "Daimyo",
        "Dairymaid",
        "Dancer",
        "Dictator",
        "Diplomat",
        "Distiller",
        "Diver",
        "Diviner",
        "Doctor",
        "Domestic servant",
        "Emperor/Empress",
        "Eunuch",
        "Explorer",
        "Farmer",
        "Fighter",
        "Fisherman",
        "Fishmonger",
        "Footman",
        "Furrier",
        "Galley slave",
        "Gardener",
        "Geisha",
        "General",
        "Gladiator",
        "Glovemaker",
        "Goldsmith",
        "Grocer",
        "Groom",
        "Guardsman",
        "Guildmaster",
        "Harness maker",
        "Hatmaker",
        "Hay merchant",
        "Healer",
        "Hearthwitch",
        "Herald",
        "Herbalist",
        "Herder",
        "Hermit",
        "Highwayman",
        "Historian",
        "Housemaid",
        "Hunter",
        "Illuminator",
        "Infantryman",
        "Innkeeper",
        "Interpreter",
        "Inventor",
        "Jailer",
        "Jester",
        "Jeweler",
        "Jongleur",
        "Judge",
        "King",
        "Kitchen drudge",
        "Knight",
        "Laborer",
        "Lady",
        "Lady in Waiting",
        "Leatherworker",
        "Librarian",
        "Linguist",
        "Locksmith",
        "Longbowman",
        "Longshoreman",
        "Lord",
        "Maidservant",
        "Majordomo",
        "Man at Arms",
        "Mason",
        "Masseur",
        "Mayor",
        "Mercer",
        "Merchant",
        "Messenger",
        "Midwife",
        "Miller",
        "Miner",
        "Minister",
        "Minstrel",
        "Monk",
        "Mortician",
        "Mourner",
        "Musician",
        "Necromancer",
        "Noble",
        "Nun",
        "Nurse",
        "Old-clothes seller",
        "Page",
        "Painter",
        "Pariah",
        "Pastry cook",
        "Peasant",
        "Perfumer",
        "Philosopher",
        "Physician",
        "Pigkeeper",
        "Pilgrim",
        "Pirate",
        "Plasterer",
        "Potter",
        "Priest/ess",
        "Prince/ss",
        "Privateer",
        "Professor",
        "Prostitute",
        "Pursemaker",
        "Queen",
        "Ranger",
        "Ratcatcher",
        "Reeve",
        "Ronin",
        "Roofer",
        "Ropemaker",
        "Royal Adviser",
        "Rugmaker",
        "Ruler",
        "Saddler",
        "Sailor",
        "Samurai",
        "Scabbard maker",
        "Sculptor",
        "Scavenger",
        "Scholar",
        "Scrivener",
        "Seamstress",
        "Servant",
        "Shaman",
        "Shepherd",
        "Ship's captain",
        "Shoemaker",
        "Silversmith",
        "Slave",
        "Slaver",
        "Smith",
        "Soldier",
        "Sorcerer/Sorceress",
        "Spice Merchant",
        "Squire",
        "Stablehand",
        "Stevedore",
        "Stonemason",
        "Storyteller",
        "Steward",
        "Street kid",
        "Street seller",
        "Street sweeper",
        "Student",
        "Surgeon",
        "Surveyor",
        "Swordsman",
        "Sycophant",
        "Tailor",
        "Tanner",
        "Tavernkeeper",
        "Tax collector",
        "Teacher",
        "Teamster",
        "Thatcher",
        "Thief",
        "Tinker",
        "Torturer",
        "Town crier",
        "Toymaker",
        "Trapper",
        "Vendor",
        "Vermin catcher",
        "Veterinarian",
        "Village chief",
        "Vintner",
        "Viking",
        "Warlock",
        "Warrior",
        "Water carrier",
        "Weaver",
        "Wetnurse",
        "Wine seller",
        "Witch",
        "Wizard",
        "Woodcarver",
        "Woodcutter",
        "Wood seller",
        "Wrestler",
        "Writer"
        ]

    const town: Array<string> = [
        "Tavern",
        "Shop",
        "Forge",
        "Temple",
        "Keep"
    ]
    
    const randomNumber = (max: number) => {
        return Math.floor(Math.random() * max )
    } 

    const genFirstName = () => {
        const [s,m,e] = [start[randomNumber(start.length)], middle[randomNumber(middle.length)], end[randomNumber(end.length)]]
        
        const r = randomNumber(3)
        const fname = r === 0?  s : r === 1? s + m : r === 2? s + m + e : ""

       return  fname
        
    }

    const genLastName = () => {
        const [m,e] = [middle[randomNumber(10)], end[randomNumber(10)]]
        
        return m + e
        
    }
    
    const genRace = () => {
        return races[randomNumber(races.length)]
    }
    const genNature = () => {
        return nature[randomNumber(nature.length)]
    }
    const genJob = () => {
        return jobs[randomNumber(jobs.length)]
    }


    const single_npc = () => {
        return(
            <IonGrid className="ion-text-center">
            <IonRow>
                <IonCol size="12">
                    <IonIcon size="large" icon={personCircle}/>
                    <IonText className="ion-text-capitalize">
                        <h1>{genFirstName()} {genLastName()}</h1>
                        
                    </IonText>

                </IonCol>
            </IonRow>
            <IonRow>
            <IonCol size="12">
                    <IonBadge color="success">
                        <IonLabel>
                            <h2>{genNature()}</h2>
                        </IonLabel>
                    </IonBadge>
                </IonCol>
                <IonCol size="12">
                    <IonBadge color="success">
                        <IonLabel>
                            <h2>{genRace()}</h2>
                        </IonLabel>
                    </IonBadge>
                </IonCol>
                <IonCol size="12">
                    <IonBadge color="success">
                        <IonLabel>
                            <h2>{genJob()}</h2>
                        </IonLabel>
                    </IonBadge>
                </IonCol>
                
            </IonRow>
        </IonGrid>
        )
    }

    const sm_single_npc = (townArea:string, index:number) => {
        return(
            <IonGrid className="ion-text-left npc-bg-outline " key={index}>
            <IonRow>
               
                    
              
                <IonCol size="12">
                <IonText color="success"><h6>{townArea}</h6></IonText>
                <IonText className="ion-text-capitalize">
                        <h3>{genFirstName()} {genLastName()}</h3>
                        
                    </IonText>
                </IonCol>
               
            <IonCol size="4">
                    <IonBadge color="success">
                        <IonLabel>
                            <h4>{genNature()}</h4>
                        </IonLabel>
                    </IonBadge>
                </IonCol>
                <IonCol size="4">
                    <IonBadge color="success">
                        <IonLabel>
                            <h4>{genRace()}</h4>
                        </IonLabel>
                    </IonBadge>
                </IonCol>
                <IonCol size="4">
                    <IonBadge color="success">
                        <IonLabel>
                            <h4>{genJob()}</h4>
                        </IonLabel>
                    </IonBadge>
                </IonCol>
                
            </IonRow>
          
            
        </IonGrid>
        )
    }


    return (

        <>
           {
           display === "single" ? single_npc() : display === "sm_single" ? 
           
            town.map((area:string, index: number) => {
               return sm_single_npc(area, index)
            })
         
           
           : null
           
            }
        </>
    )

};

export default InstantCharcterGen;