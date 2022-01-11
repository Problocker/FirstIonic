import { 
  IonApp,
  IonHeader,
  IonButton, 
  IonIcon, 
  IonToast, 
  IonToolbar,
  IonContent,
  IonTitle
} from '@ionic/react';
import React, {useState} from 'react';
import {play as playIcon} from 'ionicons/icons';



function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);

  };
return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Første Ionic Applikation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
 <IonButton  onClick={handleClick}>
   <IonIcon icon={playIcon} slot="start" />
  
   Klik her!
 </IonButton>
 <IonToast isOpen={showToast} message="HEJ!!!" />
 </IonContent>
  </IonApp>
  );
}

export default App;
