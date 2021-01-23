import * as firebase from 'firebase' 
require('@firebase/firestore')
 var firebaseConfig = {
 
    apiKey: "AIzaSyCDswxXESlZggwRh_9lu6l9hJKq_IUCt1o",
    authDomain: "wyly-87ae1.firebaseapp.com",
    projectId: "wyly-87ae1",
    storageBucket: "wyly-87ae1.appspot.com",
    messagingSenderId: "792954490746",
    appId: "1:792954490746:web:eceb657aa307af2ea350c3"
  };
  firebase.initializeApp(firebaseConfig);
   export default firebase.firestore();