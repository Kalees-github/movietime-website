document.addEventListener("DOMContentLoaded", function () {

    let userName = localStorage.getItem("userName");

    if (!userName) {

        userName = prompt("Please enter your name:");

        if (userName && userName.trim() !== "") {

            userName = userName.trim();

            localStorage.setItem("userName", userName);

        } else {

            userName = "Guest";

        }
    }

    document.getElementById("profileName").textContent = userName;

});