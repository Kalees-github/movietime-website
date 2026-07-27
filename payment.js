// PAYMENT DATA


let movie = localStorage.getItem("movie") || "Jana Nayagan";

let date = localStorage.getItem("date") || "Not Selected";

let theatre = localStorage.getItem("theatre") || "Not Selected";

let time = localStorage.getItem("time") || "Not Selected";

let seats = localStorage.getItem("seats") || "Not Selected";


// PRICE SETTINGS

const ticketPricePerSeat = 180;

const convenienceFeePerSeat = 25;


// PAGE LOAD

document.addEventListener("DOMContentLoaded", function () {

    // Display booking details
    document.getElementById("movieName").textContent = movie;

    document.getElementById("selectedDate").textContent = date;

    document.getElementById("selectedTheatre").textContent = theatre;

    document.getElementById("selectedTime").textContent = time;

    document.getElementById("selectedSeats").textContent = seats;


    // Calculate price
    calculatePrice();

});

// CALCULATE PRICE

function calculatePrice() {

    let seatArray = seats
        .split(",")
        .map(function (seat) {

            return seat.trim();

        })
        .filter(function (seat) {

            return seat !== "";

        });


    let numberOfSeats = seatArray.length;


    // If seats are not selected
    if (
        seats === "Not Selected" ||
        numberOfSeats === 0
    ) {

        numberOfSeats = 0;

    }


    let ticketPrice =
        numberOfSeats * ticketPricePerSeat;


    let convenienceFee =
        numberOfSeats * convenienceFeePerSeat;


    let totalAmount =
        ticketPrice + convenienceFee;


    document.getElementById("ticketPrice").textContent =
        "₹" + ticketPrice;


    document.getElementById("convenienceFee").textContent =
        "₹" + convenienceFee;


    document.getElementById("totalAmount").textContent =
        "₹" + totalAmount;


    // Save total
    localStorage.setItem(
        "ticketPrice",
        ticketPrice
    );


    localStorage.setItem(
        "convenienceFee",
        convenienceFee
    );


    localStorage.setItem(
        "totalAmount",
        totalAmount
    );

}

// SELECT PAYMENT METHOD

function selectPayment(method) {

    const upiForm =
        document.getElementById("upiForm");

    const cardForm =
        document.getElementById("cardForm");

    const netBankingForm =
        document.getElementById("netBankingForm");


    // Hide all
    upiForm.classList.add("hidden");

    cardForm.classList.add("hidden");

    netBankingForm.classList.add("hidden");


    // Show selected form
    if (method === "UPI") {

        upiForm.classList.remove("hidden");

    }


    if (method === "Card") {

        cardForm.classList.remove("hidden");

    }


    if (method === "Net Banking") {

        netBankingForm.classList.remove("hidden");

    }


    // Save payment method
    localStorage.setItem(
        "paymentMethod",
        method
    );

}

// MAKE PAYMENT

function makePayment() {

    const paymentMethod =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        );


    if (!paymentMethod) {

        alert("Please select a payment method.");

        return;

    }


    const method =
        paymentMethod.value;


    // UPI VALIDATION
   
    if (method === "UPI") {

        const upiId =
            document.getElementById("upiId").value.trim();


        if (upiId === "") {

            alert("Please enter your UPI ID.");

            return;

        }


        if (!upiId.includes("@")) {

            alert("Please enter a valid UPI ID.");

            return;

        }

    }

    // CARD VALIDATION
    
    if (method === "Card") {

        const cardNumber =
            document
                .getElementById("cardNumber")
                .value
                .replace(/\s/g, "");


        const expiry =
            document
                .getElementById("expiry")
                .value
                .trim();


        const cvv =
            document
                .getElementById("cvv")
                .value
                .trim();


        if (cardNumber === "") {

            alert("Please enter your card number.");

            return;

        }


        if (cardNumber.length !== 16) {

            alert(
                "Card number must contain 16 digits."
            );

            return;

        }


        if (expiry === "") {

            alert("Please enter expiry date.");

            return;

        }


        if (cvv === "") {

            alert("Please enter CVV.");

            return;

        }


        if (cvv.length !== 3) {

            alert("CVV must contain 3 digits.");

            return;

        }

    }

    // NET BANKING VALIDATION

    if (method === "Net Banking") {

        const bank =
            document.getElementById("bank").value;


        if (bank === "") {

            alert("Please select your bank.");

            return;

        }

    }

    // SAVE PAYMENT DATA

    localStorage.setItem(
        "paymentMethod",
        method
    );


    localStorage.setItem(
        "paymentStatus",
        "Successful"
    );


    // Generate booking ID
    const bookingId =
        "MH" +
        Math.floor(
            100000 + Math.random() * 900000
        );


    localStorage.setItem(
        "bookingId",
        bookingId
    );

    // PAYMENT SUCCESS

    alert(
        "Payment successful!\n\n" +
        "Booking ID: " + bookingId
    );


    window.location.href =
        "success.html";

}

// GO BACK

function goBack() {

    window.history.back();

}