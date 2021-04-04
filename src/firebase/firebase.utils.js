import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyD_FAN0Gl7P8r115zhg58bORmp9HJwzgn4",
    authDomain: "crwn-db-payoneer.firebaseapp.com",
    projectId: "crwn-db-payoneer",
    storageBucket: "crwn-db-payoneer.appspot.com",
    messagingSenderId: "860130636528",
    appId: "1:860130636528:web:4673485d51011680f48835",
    measurementId: "G-5TJ565TFB0"
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;