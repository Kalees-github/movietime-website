// SELECTED DATE

let selectedDate = "25 August 2026";

let selectedTime = "";


// SELECT DATE

function selectDate(button, date) {

    const dateButtons =
        document.querySelectorAll(".date-card");


    // Remove active from all dates

    dateButtons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    // Add active to selected date

    button.classList.add("active");


    selectedDate = date;


    console.log("Selected Date:", selectedDate);

}


// SELECT TIME

function selectTime(button, time) {

    const timeButtons =
        document.querySelectorAll(".time-btn");


    // Remove active from all time buttons

    timeButtons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    // Add active to selected time

    button.classList.add("active");


    selectedTime = time;


    console.log("Selected Time:", selectedTime);

}


// BOOK COMEDY TICKET

function bookComedyTicket() {

    if (selectedTime === "") {

        alert("Please select a show time.");

        return;

    }


    // Store booking details

    localStorage.setItem(
        "comedyName",
        "Stand Up Comedy Night"
    );


    localStorage.setItem(
        "comedyDate",
        selectedDate
    );


    localStorage.setItem(
        "comedyTime",
        selectedTime
    );


    localStorage.setItem(
        "comedyVenue",
        "Prozone Mall, Coimbatore"
    );


    // Go to seat selection

    window.location.href =
        "comedy-seat-selection.html";

}


// GO BACK

function goBack() {

    window.history.back();

}


// GO HOME

function goHome() {

    window.location.href =
        "index.html";

}