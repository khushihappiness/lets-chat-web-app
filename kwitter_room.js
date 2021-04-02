

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAj0NqVttT9uesAHAwWXaRT8O-ml3-9fL8",
  authDomain: "kwitter-app-51449.firebaseapp.com",
  databaseURL: "https://kwitter-app-51449-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-51449",
  storageBucket: "kwitter-app-51449.appspot.com",
  messagingSenderId: "106670816327",
  appId: "1:106670816327:web:77dec28d9bbf25d347c562"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logout()
{
    window.location="index.html";
}
