import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB8Cacu8YKWBk3vdTYtGkef848NUC-SxLg",
    authDomain: "ninja-smoothies-7c0c3.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-7c0c3.firebaseio.com",
    projectId: "ninja-smoothies-7c0c3",
    storageBucket: "ninja-smoothies-7c0c3.appspot.com",
    messagingSenderId: "905078569060",
    appId: "1:905078569060:web:14f74485ac714f140cc771",
    measurementId: "G-N5Z5SBWB6J"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()