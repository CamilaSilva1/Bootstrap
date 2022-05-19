// Created by Camila Silva
// Since 13/05/2022
// Register page in Html, Css and JavaScript
// A part of the style was developed in Bootstrap
// Js responsible for showing the password in the input

// variable receiving the password input
const inputPw = document.getElementById("password");

// show and hide password function
function eyeClick(){
    // adding an event to the show password eye
    seePw.addEventListener('click', (e) => {
    
        // variable receiving type of password input
        let typePw = inputPw.type == "password";

        // if type is password, then change to type text
        if(typePw){
    
            inputPw.setAttribute("type", "text");
            
        }
        // otherwise change to password type
        else{
    
            inputPw.setAttribute("type", "password");
      
    
        }
    
    })
}

// calling the function
eyeClick();
