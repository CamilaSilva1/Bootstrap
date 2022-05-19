// Created by Camila Silva
// Since 12/05/2022
// Register page in Html, Css and JavaScript
// A part of the style was developed in Bootstrap
// this js is responsible for login users in firebase

// imports firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

// getting the settings from the project created in firebase
const firebaseConfig = {
  apiKey: "AIzaSyDa8RS5NI4SMA2nXRJP38ip8DnYoWtC1tA",
  authDomain: "vize-solutions-f89ef.firebaseapp.com",
  databaseURL: "https://vize-solutions-f89ef-default-rtdb.firebaseio.com",
  projectId: "vize-solutions-f89ef",
  storageBucket: "vize-solutions-f89ef.appspot.com",
  messagingSenderId: "229449980069",
  appId: "1:229449980069:web:6c2a912d9591b6f4f1d54c",
  measurementId: "G-FXJJ6XJ7TF"
};

// Initialize Firebase, auth, database
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

//this role is responsible for login users
function loginUsers(){
  // adding a click event to the button with the id btnLogin
    btnLogin.addEventListener('click', (e) => {

      // variables created to get the values ​​of the inputs in the html
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

         // login with email and password
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
            alert("Usuário logado com sucesso!");

            // calling the users page
            userScreen();
        })
        // checking possible errors
        .catch((error) => {
          if(error.code == 'auth/invalid-email'){
            alert('Email inválido');
          }
          else if(error.code == 'auth/user-not-found'){
            alert('Usuário não encontrado');
          }
          else if(error.code == 'auth/wrong-password'){
            alert('Senha invalida');
          }

     });

  })
}

// calling function
loginUsers();

// function to calling users page
function userScreen(){
  window.location.href = "../html/users.html"
}