// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyASecK86oPsm_fhOoUjoyd_8RwyUNG6dQ8",
    authDomain: "harryfinalinstagram.firebaseapp.com",
    projectId: "harryfinalinstagram",
    storageBucket: "harryfinalinstagram.appspot.com",
    messagingSenderId: "133298479029",
    appId: "1:133298479029:web:f8df568154ea6be5bf83fc"
  };














firebase.initializeApp(firebaseConfig);
export default firebase;