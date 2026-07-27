// BOOKING DATA

const movie =
    localStorage.getItem("movie") || "Jana Nayagan";

const date =
    localStorage.getItem("date") || "25 Sat";

const theatre =
    localStorage.getItem("theatre") || "Not Selected";

const time =
    localStorage.getItem("time") || "Not Selected";


// SEAT SETTINGS

const seatPrice = 10;

let selectedSeats = [];


// PAGE LOAD

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Display booking information
        document.getElementById("movieName").textContent =
            movie;

        document.getElementById("movieDisplay").textContent =
            movie;

        document.getElementById("dateDisplay").textContent =
            date;

        document.getElementById("theatreDisplay").textContent =
            theatre;

        document.getElementById("timeDisplay").textContent =
            time;


        // Example occupied seats
        const occupiedSeats = [
            "A3",
            "B5",
            "C2",
            "D7",
            "E4"
        ];


        occupiedSeats.forEach(function(seatNumber) {

            const seat =
                document.querySelector(
                    `[data-seat="${seatNumber}"]`
                );


            if (seat) {

                seat.classList.add("occupied");

                seat.disabled = true;

            }

        });


        // Add click event to available seats
        const seats =
            document.querySelectorAll(".seat");


        seats.forEach(function(seat) {

            seat.addEventListener(
                "click",
                function() {

                    selectSeat(seat);

                }
            );

        });

    }
);


// SELECT SEAT

function selectSeat(seat) {

    const seatNumber =
        seat.getAttribute("data-seat");


    // If already selected
    if (seat.classList.contains("selected")) {

        seat.classList.remove("selected");


        selectedSeats =
            selectedSeats.filter(
                function(item) {

                    return item !== seatNumber;

                }
            );

    }

    else {

        // Maximum 6 seats
        if (selectedSeats.length >= 6) {

            alert(
                "You can select a maximum of 6 seats."
            );

            return;

        }


        seat.classList.add("selected");

        selectedSeats.push(seatNumber);

    }


    updateSummary();

}


// UPDATE SUMMARY

function updateSummary() {

    const selectedSeatsElement =
        document.getElementById("selectedSeats");


    const totalPriceElement =
        document.getElementById("totalPrice");


    if (selectedSeats.length === 0) {

        selectedSeatsElement.textContent =
            "No seats selected";

        totalPriceElement.textContent =
            "$0";

        return;

    }


    selectedSeatsElement.textContent =
        selectedSeats.join(", ");


    const total =
        selectedSeats.length * seatPrice;


    totalPriceElement.textContent =
        "$" + total;

}


// CONTINUE TO PAYMENT

function continueToPayment() {

    if (selectedSeats.length === 0) {

        alert(
            "Please select at least one seat."
        );

        return;

    }


    // Save selected seats
    localStorage.setItem(
        "seats",
        JSON.stringify(selectedSeats)
    );


    // Save total amount
    const total =
        selectedSeats.length * seatPrice;


    localStorage.setItem(
        "totalPrice",
        total
    );


    // Go to payment page
    window.location.href =
        "payment.html";

}


// GO BACK

function goBack() {

    window.history.back();

}