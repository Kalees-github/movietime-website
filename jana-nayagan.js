// GO BACK

function goBack() {

    window.history.back();

}


// BOOK TICKETS

function bookTickets(movieName) {

    // Store selected movie

    localStorage.setItem(
        "selectedMovie",
        movieName
    );

    // Open common booking page

    window.location.href = "booking.html";

}


// SEARCH BUTTON

function openSearch() {

    alert("Search feature will be added soon.");

}


// LANGUAGE SELECTION

document.addEventListener("DOMContentLoaded", function () {

    const languages =
        document.querySelectorAll(".language");


    languages.forEach(function (language) {

        language.addEventListener("click", function () {

            languages.forEach(function (item) {

                item.classList.remove("active");

            });


            language.classList.add("active");

        });

    });


    console.log(
        "Jana Nayagan movie details page loaded."
    );

});