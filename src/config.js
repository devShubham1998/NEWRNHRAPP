// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDloUjDvyK60YGG0Nzu4_j1CtJTv3VhpkM',
  authDomain: 'newrnhrapp.firebaseapp.com',
  projectId: 'newrnhrapp',
  storageBucket: 'newrnhrapp.appspot.com',
  messagingSenderId: '574694842061',
  appId: '1:574694842061:web:5ea2d35fd4bee5802a1384',
  measurementId: 'G-BD2LNC18BM',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase
  .firestore()
  .settings({experimentalForceLongPolling: true, persistence: true});
export {firebase};
