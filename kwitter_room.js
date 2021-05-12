var firebaseConfig = {
      apiKey: "AIzaSyCQp-WR9exHDxDRbi-3RcAzvA8XyDTle4A",
      authDomain: "kwitter-98e0f.firebaseapp.com",
      databaseURL: "https://kwitter-98e0f-default-rtdb.firebaseio.com",
      projectId: "kwitter-98e0f",
      storageBucket: "kwitter-98e0f.appspot.com",
      messagingSenderId: "439005148706",
      appId: "1:439005148706:web:f73bda9c7ab690ae0f7c7b",
      measurementId: "G-18DBHCGL25"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}