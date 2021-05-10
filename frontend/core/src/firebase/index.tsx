import firebase from 'firebase/app'
import 'firebase/storage'

 const firebaseConfig = {
    apiKey: "AIzaSyD4vDi6XcQgEPIM8qrMQ7wCbJLA6Bnt7QQ",
    authDomain: "startup-hunt-wen-app.firebaseapp.com",
    projectId: "startup-hunt-wen-app",
    storageBucket: "startup-hunt-wen-app.appspot.com",
    messagingSenderId: "459647629949",
    appId: "1:459647629949:web:5905be1df628f489530f14",
    measurementId: "G-583987WQZR"
  };
  
// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
} else {
   firebase.app(); // if already initialized, use that one
}
const storage = firebase.storage();


export { storage, firebase as default }
