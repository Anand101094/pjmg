import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBjFgHb7jdygHg-tHylbylLmBH3UIC7sME",
  authDomain: "awesome-1-e8228.firebaseapp.com",
  databaseURL: "https://awesome-1-e8228.firebaseio.com",
  projectId: "awesome-1-e8228",
  storageBucket: "awesome-1-e8228.appspot.com",
  messagingSenderId: "431767204183"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;