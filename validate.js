function validate_function(event){
    event.preventDefault();
    var username=document.getElementById("login").value
    var password=document.getElementById("password").value

    if(username=="ishika" && password=="tekade"){
        window.location.replace("http://127.0.0.1:5500/New%20folder/home.html")
    }
    else{
        alert("Incorrect Password or username")
    }
}