
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDmv3S9wa6DSCXrTAzMXLq7zOjV1eX3zwg",
    authDomain: "c93kwitter-22573.firebaseapp.com",
    databaseURL: "https://c93kwitter-22573-default-rtdb.firebaseio.com",
    projectId: "c93kwitter-22573",
    storageBucket: "c93kwitter-22573.appspot.com",
    messagingSenderId: "634891379632",
    appId: "1:634891379632:web:f421f274d7f77bb87f6c75",
    measurementId: "G-VV54FSEJ81"
  };
  //Initialize FireBase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
    userName=document.getElementById("userName").value;
firebase.database().ref("/").child(userName).update({
  porpose: "adicionar usuário" 
})

}

  