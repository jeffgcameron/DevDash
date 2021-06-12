import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBS5hIxI16SXMPhRnIa6A789u2YV_V1KQw",
    authDomain: "devdash-21357.firebaseapp.com",
    projectId: "devdash-21357",
    storageBucket: "devdash-21357.appspot.com",
    messagingSenderId: "1024826995597",
    appId: "1:1024826995597:web:4d4298b96583d5105003c4"
}).auth();

