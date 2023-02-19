import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAodUZeyP6ICzgFeQKSjaqlP0OG-sRNlMo',
    authDomain: 'react-message-app-7bc1b.firebaseapp.com',
    projectId: 'react-message-app-7bc1b',
    storageBucket: 'react-message-app-7bc1b.appspot.com',
    messagingSenderId: '184164674587',
    appId: '1:184164674587:web:7c3727b92bb9de3440dcbe',
  })
  .auth();
