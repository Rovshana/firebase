const firebaseConfig = {
    apiKey: "AIzaSyBRSG1h9e_uCEbV5bplzbzpu8obEH56_hE",
    authDomain: "test-17c75.firebaseapp.com",
    databaseURL: "https://test-17c75-default-rtdb.firebaseio.com/",
    projectId: "test-17c75",
    storageBucket: "test-17c75.appspot.com",
    messagingSenderId: "200021502237",
    appId: "1:200021502237:web:15e6a85556016703d0d9f4"
  };
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  let myDataBase = firebase.database();