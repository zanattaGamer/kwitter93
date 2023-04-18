//LINKS FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDmv3S9wa6DSCXrTAzMXLq7zOjV1eX3zwg",
      authDomain: "c93kwitter-22573.firebaseapp.com",
      databaseURL: "https://c93kwitter-22573-default-rtdb.firebaseio.com",
      projectId: "c93kwitter-22573",
      storageBucket: "c93kwitter-22573.appspot.com",
      messagingSenderId: "634891379632",
      appId: "1:634891379632:web:f421f274d7f77bb87f6c75",
      measurementId: "G-VV54FSEJ81"
    };
    //Incialize FireBase
    firebase.initializeApp(firebaseConfig);

    userName=localStorage.getItem("userName");
    roomName=localStorage.getItem("roomName");

    function send()
    {
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
      })
      document.getElementById("msg").value= "";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);

name=mensageData['name'];
message=messageData['message'];
like=messageData['like'];
nameWitHTag="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWitHTag="<h4 class='message_h4'>" + message + "</h4>";
likeButton="<button class='btn btn-warning' id="+firebaseMessageId+"value="+like+" onclick'=updateLike(this.id)'>";
spanWitHTag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=nameWitHTag + messageWitHTag + likeButton + spanWitHTag;
document.getElementById("output").innerHTML+=row;

//Fim do código
      } });  }); }
getData();

function updateLike(messageId){
console.log("botão de like pressionado - " + messageId);
buttonId=messageId;
likes=document.getElementById(buttonId).value;
updateLikes=Number(likes) + 1;
console.log(updateLikes);

firebase.database().ref(roomName).child(messageId).update({
      like: updateLikes
})
}

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
          window.location.replace("index.html");
      }
