import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAaJ2TuBq1jD3zDXs9-euQGVUFpJs8GaPc",
    authDomain: "instagram-clone-421.firebaseapp.com",
    databaseURL: "https://instagram-clone-421.firebaseio.com",
    projectId: "instagram-clone-421",
    storageBucket: "instagram-clone-421.appspot.com",
    messagingSenderId: "991604369157"
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();
