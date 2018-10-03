import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_P3CZrEyl_mS3AlYNQHnfBdXkhbYmIIE",
  authDomain: "musicallyspeaking-1eae8.firebaseapp.com",
  databaseURL: "https://musicallyspeaking-1eae8.firebaseio.com",
  projectId: "musicallyspeaking-1eae8",
  storageBucket: "musicallyspeaking-1eae8.appspot.com",
  messagingSenderId: "610345710953"
};

export function signOut(){
    return firebase.auth().signOut()
        .then(()=>{
            localStorage.removeItem('userInfo');
            localStorage.removeItem('userToken');
        });
};


firebase.initializeApp(config);




export default firebase;