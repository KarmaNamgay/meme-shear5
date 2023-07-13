function login(){
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("userName",user_name);
    window.location="meme_gc.html";
}