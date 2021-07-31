import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAzPQRMTkjUyyk-ZmH3yNIxO2jqI3DOotc",
    authDomain: "doc-creator-d0ccf.firebaseapp.com",
    projectId: "doc-creator-d0ccf",
    storageBucket: "doc-creator-d0ccf.appspot.com",
    messagingSenderId: "937140632401",
    appId: "1:937140632401:web:7099535143e90da32c7170"
};

// To avoid double initialization, check if app exists before intializing
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export { db };