import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBe1iIlsWoYIOYAAFEiFH84JdS_FSfowsE",
    authDomain: "todos-app-af721.firebaseapp.com",
    projectId: "todos-app-af721",
    storageBucket: "todos-app-af721.appspot.com",
    messagingSenderId: "150348729437",
    appId: "1:150348729437:web:e93f4b761c0cdbe7a7d1b4",
    measurementId: "G-GCCT61GD61"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;