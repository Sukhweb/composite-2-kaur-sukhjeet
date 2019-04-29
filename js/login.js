





//log-in

 const login = () => {

 const loginButton = document.getElementById("login");
 loginButton.addEventListener("click", event => {

    let name = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    

    if( name == "sukh" && password == "@123") {

       localStorage.setItem("username",name);
       localStorage.setItem("password",password);

       window.location ="listings.html";
    }
    else {
        alert("username & password invalid");
    }
  
 });

};

























 