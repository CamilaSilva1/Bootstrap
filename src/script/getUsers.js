// Created by Camila Silva
// Since 12/05/2022
// Register page in Html, Css and JavaScript
// A part of the style was developed in Bootstrap
// This js is responsible for getting the users registered in the database

// imports firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

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
const db = getFirestore();

// variable created to link with the collection created in firestore
const users = await getDocs(collection(db, "Usuarios"));

// function responsible for running the database and getting user data
// and list in table form in html
function getUsers(){

    // variable created to reference the table in html
    let tableUser = document.getElementById('listUsers');

    // empty variable to store database data
    let data = "";

    // traversing the database and listing in table form
    users.forEach((doc) => {

       // variable created to store the users
        const getUser = doc.data();

        // listing in the table
        data = "<table>" + "<tr><td>" + doc.id + "<td>" + getUser.username + "</td>" + "</td></tr>" + data;

        tableUser.innerHTML = data;
    });
}

// calling function
getUsers();


