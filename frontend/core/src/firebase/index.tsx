import firebase from 'firebase/app'
import 'firebase/storage'

 const firebaseConfig = {
    apiKey: "AIzaSyCkQd2vKimzEyfPrrTRCzVyDMYTikUpYVA",
    authDomain: "product-show-website.firebaseapp.com",
    projectId: "product-show-website",
    storageBucket: "product-show-website.appspot.com",
    messagingSenderId: "332549767848",
    appId: "1:332549767848:web:46f6fb3b292dc3f549789d",
    measurementId: "G-WX2ZPDQGYN"
};
  
// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
const storage = firebase.storage();


export { storage, firebase as default }
