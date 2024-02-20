//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyBGWLg9C3earAEZ9udC7lf8PRvEA2JRVB0",
    authDomain: "comp1800-2024-demo.firebaseapp.com",
    projectId: "comp1800-2024-demo",
    storageBucket: "comp1800-2024-demo.appspot.com",
    messagingSenderId: "149117272557",
    appId: "1:149117272557:web:7a1def38460f8a6e4827e4"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
