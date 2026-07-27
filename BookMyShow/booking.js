// BOOKING DATA

let selectedDate = "25 Sat";
let selectedTheatre = "";
let selectedTime = "";


// GO BACK

function goBack() {
    window.history.back();
}


// LOAD SELECTED MOVIE

document.addEventListener("DOMContentLoaded", function () {

    const movieName = localStorage.getItem("selectedMovie");

    const movieTitle = document.getElementById("bookingMovieTitle");
    const summaryMovie = document.getElementById("summaryMovie");

    if (movieName) {

        if (movieTitle) {
            movieTitle.textContent = movieName;
        }

        if (summaryMovie) {
            summaryMovie.textContent = movieName;
        }
    }
});


// SELECT DATE

function selectDate(button, date) {

    const dates = document.querySelectorAll(".date");

    dates.forEach(function (item) {
        item.classList.remove("active");
    });

    button.classList.add("active");

    selectedDate = date;

    const dateElement = document.getElementById("selectedDate");

    if (dateElement) {
        dateElement.textContent = date;
    }
}


// SELECT THEATRE + SHOW TIME

function selectShow(button, time, theatre) {

    selectedTheatre = theatre;
    selectedTime = time;

    const showButtons = document.querySelectorAll(".show-times button");

    showButtons.forEach(function (item) {
        item.classList.remove("selected");
    });

    button.classList.add("selected");

    const theatreElement = document.getElementById("selectedTheatre");

    if (theatreElement) {
        theatreElement.textContent = selectedTheatre;
    }

    const timeElement = document.getElementById("selectedTime");

    if (timeElement) {
        timeElement.textContent = selectedTime;
    }

    const summary = document.getElementById("bookingSummary");

    if (summary) {
        summary.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


// CONTINUE BOOKING

function continueBooking() {

    if (selectedTheatre === "") {
        alert("Please select a theatre.");
        return;
    }

    if (selectedTime === "") {
        alert("Please select a show time.");
        return;
    }

    const movieName = localStorage.getItem("selectedMovie");

    if (!movieName) {
        alert("Movie not selected.");
        return;
    }

    localStorage.setItem("movie", movieName);
    localStorage.setItem("date", selectedDate);
    localStorage.setItem("theatre", selectedTheatre);
    localStorage.setItem("time", selectedTime);

    window.location.href = "seats.html";
}