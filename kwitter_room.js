
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDhaaqeXziqqWwmpGLpF9aU2Mn7rMisHE0",
      authDomain: "kwitter-61c62.firebaseapp.com",
      databaseURL: "https://kwitter-61c62-default-rtdb.firebaseio.com",
      projectId: "kwitter-61c62",
      storageBucket: "kwitter-61c62.appspot.com",
      messagingSenderId: "428338755099",
      appId: "1:428338755099:web:28fbbea6d2b585c2142abe",
      measurementId: "G-E3LESRERNS"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
function addRoom()
{
 room_name = document.getElementById("room_name").value;
 
 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });
 
   localStorage.setItem("room_name", room_name);
  
   window.location = "kwitter_page.html";
}
 
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });
 
}
 
getData();
 
function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
 
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";
}
 

