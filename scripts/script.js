/*
Student Name: Tarrayna Smith
File Name: script.js
Date: 12/11/2021
*/

//Global variables


//Hamburger menu function
function menu() {
    let navlinks = document.getElementById("nav-links");
    let menuicon = document.getElementById("hamburger");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "white";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}