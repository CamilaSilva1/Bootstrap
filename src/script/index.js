// Created by Camila Silva
// Since 12/05/2022
// Register page in Html, Css and JavaScript
// A part of the style was developed in Bootstrap
// this js is responsible for authentication and creating users in firebase

// imports firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

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

// Initialize Firebase, auth, database and firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();
const db = getFirestore(app);

//this role is responsible for creating and authenticating users
function registerUsers(){
    // adding a click event to the button with the id btnRegister
    btnRegister.addEventListener('click', (e) => {

        // variables created to get the values ​​of the inputs in the html
        let username = document.getElementById('user').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // creating user with email and password and authentication
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
           
            // creating the data in the database
            set(ref(database, 'usuarios/' + user.uid), {
                id: Math.floor(Math.random() * 100),
                username: username,
                email: email,
                password: password,
            })

            // creating the data in the firestore
            addDoc(collection(db, "Usuarios"), {
                id: Math.floor(Math.random() * 100),
                username: username,
                email: email,
                password: password,
              });

            alert("Usuário cadastrado com sucesso!");

        })
        // checking possible errors
        .catch((error) => {
            if(error.code == 'auth/email-already-in-use'){
                alert('Este email já está sendo usado');
            }
            else if(error.code == 'auth/invalid-email'){
                alert('Email inválido');
            }
            else if(error.code == 'auth/weak-password'){
                alert('A senha deve ter mais de 6 caracteres');
            }
        });
    
    })
}

// calling function
registerUsers();

