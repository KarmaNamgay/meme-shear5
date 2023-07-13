var firebaseConfig = {
    apiKey: "AIzaSyCiotHGSG7GvzF9oBWdaF8i1g4ARex_vdU",
    authDomain: "cat-chat-11425.firebaseapp.com",
    databaseURL: "https://cat-chat-11425-default-rtdb.firebaseio.com",
    projectId: "cat-chat-11425",
    storageBucket: "cat-chat-11425.appspot.com",
    messagingSenderId: "416461324828",
    appId: "1:416461324828:web:ae183ffc250234c45e55d9"
  };

 firebase.initializeApp(firebaseConfig);
 var username=localStorage.getItem("userName");
 document.getElementById("user_name").innerHTML="Welcome "+ username + " !!";

 function addgc(){
    var gc_name=document.getElementById("gc_name").value;
    localStorage.setItem("gc_name", gc_name);
    firebase.database().ref("/").child(gc_name).update({
          puspose:"adding gc name"
    });

    window.location="meme_page.html";
 }

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("room_names "+ Room_names);
     var row="<div class='room_name' id='"+Room_names+"' onclick='redirectToGc(this.id)'> #"+Room_names+"</div> <hr>" 
     document.getElementById("output").innerHTML+=row;                
    
    });});}

    function redirectToGc(r_name){
          console.log(r_name);
          localStorage.setItem("gc_name",r_name);
          window.location="cat_chat_page.html";
    }
getData();
