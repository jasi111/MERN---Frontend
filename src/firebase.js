import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlumYmIPo5UwZzCFanoqA7elFDZlDZak0",
    authDomain: "ecommerce-bbf58.firebaseapp.com",
    databaseURL: "https://ecommerce-bbf58-default-rtdb.firebaseio.com",
    projectId: "ecommerce-bbf58",
    storageBucket: "ecommerce-bbf58.appspot.com",
    messagingSenderId: "666544513719",
    appId: "1:666544513719:web:e395a050ac731f69126332"
  };

  firebase.initializeApp(firebaseConfig);
    // var database = firebase.database();

   

  export default firebase;


