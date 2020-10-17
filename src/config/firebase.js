import firebase from "firebase";
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDE_-a9LvFSsCpYNH2W2n8rXWOomlcdUnI",
    authDomain: "noticiasarequipa-4571e.firebaseapp.com",
    databaseURL: "https://noticiasarequipa-4571e.firebaseio.com",
    projectId: "noticiasarequipa-4571e",
    storageBucket: "noticiasarequipa-4571e.appspot.com",
    messagingSenderId: "426211363785",
    appId: "1:426211363785:web:d26e90ba0370b5ff167618",
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {fire as default, firebase, storage};