// EVENT BOOKING DATA

let selectedDate = "";
let selectedLocation = "";
let selectedTime = "";

let ticketQuantity = 1;

let selectedPayment = "";

// EVENT DATA

const eventData = {

    comedy1: {
        type: "COMEDY SHOW",
        name: "Stand Up Comedy Night",
        image: "images/comedy1.webp",
        price: 299,
        locations: ["Coimbatore", "Chennai", "Bengaluru"],
        dates: ["22 Aug", "23 Aug", "29 Aug", "30 Aug"],
        times: ["7:00 PM", "8:30 PM"]
    },

    comedy2: {
        type: "COMEDY SHOW",
        name: "Tamil Comedy Show",
        image: "images/comedy2.jpg",
        price: 349,
        locations: ["Coimbatore", "Chennai"],
        dates: ["23 Aug", "24 Aug", "30 Aug"],
        times: ["6:30 PM", "8:00 PM"]
    },

    comedy3: {
        type: "COMEDY SHOW",
        name: "Open Mic Comedy",
        image: "images/comedy3.webp",
        price: 249,
        locations: ["Coimbatore", "Bengaluru"],
        dates: ["25 Aug", "27 Aug", "31 Aug"],
        times: ["6:00 PM", "7:30 PM"]
    },

    comedy4: {
        type: "COMEDY SHOW",
        name: "Comedy Festival",
        image: "images/comedy4.jpg",
        price: 399,
        locations: ["Chennai", "Bengaluru"],
        dates: ["28 Aug", "29 Aug", "30 Aug"],
        times: ["5:30 PM", "8:00 PM"]
    },

    comedy5: {
        type: "COMEDY SHOW",
        name: "Stand Up Comedy",
        image: "images/comedy5.jpg",
        price: 299,
        locations: ["Coimbatore", "Chennai"],
        dates: ["2 Sep", "3 Sep", "5 Sep"],
        times: ["7:00 PM", "9:00 PM"]
    },

    comedy6: {
        type: "COMEDY SHOW",
        name: "Comedy Show",
        image: "images/comedy6.webp",
        price: 299,
        locations: ["Madurai", "Coimbatore"],
        dates: ["6 Sep", "7 Sep", "8 Sep"],
        times: ["6:30 PM", "8:30 PM"]
    },

    // CONCERTS

    concert1: {
    type: "MUSIC FESTIVAL",
    name: "Summer Music Festival",
    image: "images/music1.jpg",
    price: 499,
    locations: ["Coimbatore", "Chennai"],
    dates: ["15 Aug", "16 Aug", "17 Aug"],
    times: ["7:00 PM", "8:30 PM"]
},

    concert2: {
        type: "MUSIC & CONCERT",
        name: "Rock Music ",
        image: "images/music2.webp",
        price: 599,
        locations: ["Bengaluru", "Chennai"],
        dates: ["10 Sep", "11 Sep", "12 Sep"],
        times: ["7:00 PM", "9:00 PM"]
    },

    concert3: {
        type: "MUSIC & CONCERT",
        name: "DJ Night",
        image: "images/music3.avif",
        price: 699,
        locations: ["Coimbatore", "Bengaluru"],
        dates: ["15 Sep", "16 Sep", "17 Sep"],
        times: ["6:30 PM", "8:30 PM"]
    },

    concert4: {
        type: "MUSIC & CONCERT",
        name: "Classical Music Concert",
        image: "images/music4.jpg",
        price: 549,
        locations: ["Chennai", "Coimbatore"],
        dates: ["20 Sep", "21 Sep", "22 Sep"],
        times: ["5:30 PM", "8:00 PM"]
    },

    concert5: {
        type: "MUSIC & CONCERT",
        name: "Classical Music Concert",
        image: "images/music5.jfif",
        price: 400,
        locations: ["Chennai", "Coimbatore"],
        dates: ["20 Sep", "21 Sep", "22 Sep"],
        times: ["5:30 PM", "9:00 PM"]
    },

    concert6: {
        type: "MUSIC & CONCERT",
        name: " Music Concert",
        image: "images/music6.jfif",
        price: 600,
        locations: ["Chennai", "Coimbatore"],
        dates: ["20 Sep", "21 Sep", "22 Sep"],
        times: ["5:30 PM", "8:00 PM"]
    },

    concert7: {
        type: "MUSIC & CONCERT",
        name: " Carnatic Music Concert",
        image: "images/music7.jfif",
        price: 500,
        locations: ["Chennai", "Coimbatore"],
        dates: ["20 Sep", "21 Sep", "22 Sep"],
        times: ["5:30 PM", "8:00 PM"]
    },

    concert8: {
        type: "MUSIC & CONCERT",
        name: "Classical Music Concert",
        image: "images/music8.jpg",
        price: 549,
        locations: ["Chennai", "Coimbatore"],
        dates: ["20 Sep", "21 Sep", "22 Sep"],
        times: ["5:30 PM", "8:00 PM"]
    }

};

// GET EVENT FROM URL

const urlParams = new URLSearchParams(window.location.search);

const eventId = urlParams.get("event") || "comedy1";

const currentEvent =
    eventData[eventId] || eventData.comedy1;

const ticketPrice = currentEvent.price;


// LOAD EVENT INFORMATION

function loadEventData() {

    const eventImage =
        document.getElementById("eventImage");

    const eventType =
        document.getElementById("eventType");

    const eventName =
        document.getElementById("eventName");

    const summaryEvent =
        document.getElementById("summaryEvent");

    const summaryLocation =
        document.getElementById("summaryLocation");


    if (eventImage) {

        eventImage.src =
            currentEvent.image;

    }


    if (eventImage) {

        eventImage.alt =
            currentEvent.name;

    }


    if (eventType) {

        eventType.textContent =
            currentEvent.type;

    }


    if (eventName) {

        eventName.textContent =
            currentEvent.name;

    }


    if (summaryEvent) {

        summaryEvent.textContent =
            currentEvent.name;

    }


    if (summaryLocation) {

        summaryLocation.textContent =
            "Select Location";

    }


    // Update starting price

    const priceElements =
        document.querySelectorAll(".event-price");

    priceElements.forEach(function(element) {

        element.textContent =
            "Starting from ₹" + ticketPrice;

    });


    createDates();

    createLocations();

    createTimes();

    updateTotal();

}

// CREATE DATE OPTIONS

function createDates() {

    const dateContainer =
        document.getElementById("dateOptions");

    if (!dateContainer) {
        return;
    }


    dateContainer.innerHTML = "";


    currentEvent.dates.forEach(function(date) {

        const button =
            document.createElement("button");

        button.className =
            "date-option";

        button.textContent =
            date;

        button.onclick = function() {

            selectDate(button, date);

        };


        dateContainer.appendChild(button);

    });

}

// CREATE LOCATION OPTIONS

function createLocations() {

    const locationContainer =
        document.getElementById("locationOptions");

    if (!locationContainer) {
        return;
    }


    locationContainer.innerHTML = "";


    currentEvent.locations.forEach(function(location) {

        const button =
            document.createElement("button");

        button.className =
            "location-option";

        button.textContent =
            "📍 " + location;

        button.onclick = function() {

            selectLocation(button, location);

        };


        locationContainer.appendChild(button);

    });

}

// CREATE TIME OPTIONS

function createTimes() {

    const timeContainer =
        document.getElementById("timeOptions");

    if (!timeContainer) {
        return;
    }


    timeContainer.innerHTML = "";


    currentEvent.times.forEach(function(time) {

        const button =
            document.createElement("button");

        button.className =
            "time-option";

        button.textContent =
            "🕐 " + time;

        button.onclick = function() {

            selectTime(button, time);

        };


        timeContainer.appendChild(button);

    });

}

// SELECT DATE

function selectDate(button, date) {

    document
        .querySelectorAll(".date-option")
        .forEach(function(item) {

            item.classList.remove("selected");

        });


    button.classList.add("selected");


    selectedDate = date;


    const summaryDate =
        document.getElementById("summaryDate");


    if (summaryDate) {

        summaryDate.textContent =
            selectedDate;

    }

}

// SELECT LOCATION

function selectLocation(button, location) {

    document
        .querySelectorAll(".location-option")
        .forEach(function(item) {

            item.classList.remove("selected");

        });


    button.classList.add("selected");


    selectedLocation = location;


    const summaryLocationText =
        document.getElementById(
            "summaryLocationText"
        );


    if (summaryLocationText) {

        summaryLocationText.textContent =
            selectedLocation;

    }


    const summaryLocation =
        document.getElementById(
            "summaryLocation"
        );


    if (summaryLocation) {

        summaryLocation.textContent =
            selectedLocation;

    }

}

// SELECT TIME

function selectTime(button, time) {

    document
        .querySelectorAll(".time-option")
        .forEach(function(item) {

            item.classList.remove("selected");

        });


    button.classList.add("selected");


    selectedTime = time;


    const summaryTime =
        document.getElementById("summaryTime");


    if (summaryTime) {

        summaryTime.textContent =
            selectedTime;

    }

}

// CHANGE TICKET QUANTITY

function changeQuantity(value) {

    ticketQuantity += value;


    if (ticketQuantity < 1) {

        ticketQuantity = 1;

    }


    if (ticketQuantity > 10) {

        ticketQuantity = 10;

    }


    const quantity =
        document.getElementById("ticketQuantity");


    if (quantity) {

        quantity.textContent =
            ticketQuantity;

    }


    const summaryTickets =
        document.getElementById("summaryTickets");


    if (summaryTickets) {

        summaryTickets.textContent =
            ticketQuantity;

    }


    updateTotal();

}

// UPDATE TOTAL

function updateTotal() {

    const total =
        ticketQuantity * ticketPrice;


    const totalAmount =
        document.getElementById("totalAmount");


    if (totalAmount) {

        totalAmount.textContent =
            "₹" + total;

    }


    const paymentAmount =
        document.getElementById("paymentAmount");


    if (paymentAmount) {

        paymentAmount.textContent =
            "₹" + total;

    }

}

// SHOW PAYMENT

function showPayment() {

    if (!selectedDate) {

        alert("Please choose a date.");

        return;

    }


    if (!selectedLocation) {

        alert("Please choose a location.");

        return;

    }


    if (!selectedTime) {

        alert("Please choose a time.");

        return;

    }


    const paymentSection =
        document.getElementById(
            "paymentSection"
        );


    if (paymentSection) {

        paymentSection.classList.add("show");


        paymentSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}

// SELECT PAYMENT

function selectPayment(button, method) {

    document
        .querySelectorAll(".payment-method")
        .forEach(function(item) {

            item.classList.remove("selected");

        });


    button.classList.add("selected");


    selectedPayment = method;


    document
        .querySelectorAll(".payment-form")
        .forEach(function(form) {

            form.classList.remove("show");

        });


    if (method === "UPI") {

        document
            .getElementById("upiForm")
            .classList.add("show");

    }


    if (method === "Card") {

        document
            .getElementById("cardForm")
            .classList.add("show");

    }


    if (method === "Net Banking") {

        document
            .getElementById("netBankingForm")
            .classList.add("show");

    }

}

// CONFIRM BOOKING

function confirmBooking() {

    if (!selectedPayment) {

        alert("Please select a payment method.");

        return;

    }


    // UPI validation

    if (selectedPayment === "UPI") {

        const upi =
            document
                .getElementById("upiInput")
                .value
                .trim();


        if (!upi) {

            alert("Please enter your UPI ID.");

            return;

        }

    }


    // Card validation

    if (selectedPayment === "Card") {

        const card =
            document
                .getElementById("cardNumber")
                .value
                .trim();


        if (!card) {

            alert("Please enter your card number.");

            return;

        }

    }


    // Net Banking

    if (selectedPayment === "Net Banking") {

        const bank =
            document.querySelector(
                "#netBankingForm select"
            ).value;


        if (!bank) {

            alert("Please select your bank.");

            return;

        }

    }


    // SUCCESS PAGE DATA

    const successEvent =
        document.getElementById(
            "successEvent"
        );


    if (successEvent) {

        successEvent.textContent =
            currentEvent.name;

    }


    document.getElementById(
        "successDate"
    ).textContent =
        selectedDate;


    document.getElementById(
        "successLocation"
    ).textContent =
        selectedLocation;


    document.getElementById(
        "successTime"
    ).textContent =
        selectedTime;


    document.getElementById(
        "successTickets"
    ).textContent =
        ticketQuantity;


    document.getElementById(
        "successAmount"
    ).textContent =
        "₹" + (ticketQuantity * ticketPrice);


    // Hide payment

    document
        .getElementById("paymentSection")
        .classList.remove("show");


    // Show success

    document
        .getElementById("successCard")
        .classList.add("show");


    document
        .getElementById("successCard")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}

// RUN WHEN PAGE LOADS

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadEventData();

    }
);
