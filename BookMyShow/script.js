// BANNER SLIDER

let currentBannerIndex = 0;

const banners = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");


// UPDATE BANNERS

function updateBanners() {

    banners.forEach((banner, index) => {

        if (index === currentBannerIndex) {

            banner.classList.add("active");

            if (dots[index]) {
                dots[index].classList.add("active-dot");
            }

        } else {

            banner.classList.remove("active");

            if (dots[index]) {
                dots[index].classList.remove("active-dot");
            }

        }

    });

}


// NEXT BANNER

function nextBanner() {

    if (banners.length === 0) {
        return;
    }

    currentBannerIndex =
        (currentBannerIndex + 1) % banners.length;

    updateBanners();

}


// PREVIOUS BANNER

function previousBanner() {

    if (banners.length === 0) {
        return;
    }

    currentBannerIndex =
        (currentBannerIndex - 1 + banners.length)
        % banners.length;

    updateBanners();

}


// SHOW SPECIFIC BANNER

function showBanner(index) {

    if (index < 0 || index >= banners.length) {
        return;
    }

    currentBannerIndex = index;

    updateBanners();

}


// AUTO SLIDE

let autoSlideInterval = setInterval(
    nextBanner,
    3000
);


// PAUSE AUTO SLIDE ON HOVER

const bannerSlider =
    document.querySelector(".banner-slider");

if (bannerSlider) {

    bannerSlider.addEventListener(
        "mouseenter",
        () => {
            clearInterval(autoSlideInterval);
        }
    );

    bannerSlider.addEventListener(
        "mouseleave",
        () => {

            clearInterval(autoSlideInterval);

            autoSlideInterval =
                setInterval(nextBanner, 3000);

        }
    );

}


// OPEN MOVIE DETAILS

function openMovie(page) {

    window.location.href = page;

}


// MOVIE SLIDER - RIGHT

function scrollMovies() {

    const moviesGrid =
        document.getElementById("moviesGrid");

    if (moviesGrid) {

        moviesGrid.scrollBy({

            left: 500,
            behavior: "smooth"

        });

    }

}


// MOVIE SLIDER - LEFT

function scrollMoviesLeft() {

    const moviesGrid =
        document.getElementById("moviesGrid");

    if (moviesGrid) {

        moviesGrid.scrollBy({

            left: -500,
            behavior: "smooth"

        });

    }

}


// OPEN COMEDY DETAILS

function openComedy(page) {

    window.location.href = page;

}


// COMEDY SLIDER - RIGHT

function scrollComedy() {

    const comedyGrid =
        document.getElementById("comedyGrid");

    if (comedyGrid) {

        comedyGrid.scrollBy({

            left: 500,
            behavior: "smooth"

        });

    }

}


// COMEDY SLIDER - LEFT

function scrollComedyLeft() {

    const comedyGrid =
        document.getElementById("comedyGrid");

    if (comedyGrid) {

        comedyGrid.scrollBy({

            left: -500,
            behavior: "smooth"

        });

    }

}


// KIDS & FAMILY

function openKidsMovie(page) {

    window.location.href = page;

}


// OPEN CONCERT DETAILS

function openConcert(page) {

    window.location.href = page;

}


// LOCATION DROPDOWN

function toggleLocationDropdown(event) {

    if (event) {
        event.stopPropagation();
    }

    const dropdown =
        document.getElementById("locationDropdown");

    const locationPicker =
        document.querySelector(".location-picker");

    if (!dropdown) {
        return;
    }


    // Close Sign In

    const signinDropdown =
        document.getElementById("signinDropdown");

    if (signinDropdown) {
        signinDropdown.classList.remove("show");
    }


    // Close Menu

    const menuDropdown =
        document.getElementById("menuDropdown");

    if (menuDropdown) {
        menuDropdown.classList.remove("show");
    }


    // Toggle Location

    dropdown.classList.toggle("show");

    if (locationPicker) {

        locationPicker.classList.toggle(
            "active",
            dropdown.classList.contains("show")
        );

    }

}


// SELECT CITY

function selectLocation(city) {

    const selectedLocation =
        document.getElementById("selectedLocation");

    if (selectedLocation) {

        selectedLocation.textContent = city;

    }


    const dropdown =
        document.getElementById("locationDropdown");

    if (dropdown) {

        dropdown.classList.remove("show");

    }


    const locationPicker =
        document.querySelector(".location-picker");

    if (locationPicker) {

        locationPicker.classList.remove("active");

    }

}


// SIGN IN DROPDOWN

function toggleSignin(event) {

    if (event) {
        event.stopPropagation();
    }

    const signinDropdown =
        document.getElementById("signinDropdown");

    if (!signinDropdown) {
        return;
    }


    // Close Location

    const locationDropdown =
        document.getElementById("locationDropdown");

    if (locationDropdown) {
        locationDropdown.classList.remove("show");
    }


    const locationPicker =
        document.querySelector(".location-picker");

    if (locationPicker) {

        locationPicker.classList.remove("active");

    }


    // Close Menu

    const menuDropdown =
        document.getElementById("menuDropdown");

    if (menuDropdown) {
        menuDropdown.classList.remove("show");
    }


    // Toggle Sign In

    signinDropdown.classList.toggle("show");

}


// SIMPLE FRONTEND LOGIN

function loginUser(event) {

    if (event) {
        event.preventDefault();
    }


    // Get input elements

    const email =
        document.getElementById("loginEmail");

    const password =
        document.getElementById("loginPassword");

    const message =
        document.getElementById("loginMessage");


    // Check elements

    if (!email || !password || !message) {
        return;
    }


    // Get entered values

    const emailValue =
        email.value.trim();

    const passwordValue =
        password.value.trim();


    // EMPTY FIELD CHECK

    if (
        emailValue === "" ||
        passwordValue === ""
    ) {

        message.textContent =
            "Please enter email and password.";

        message.style.color = "red";

        return;

    }


    // DEMO LOGIN DETAILS

    const correctEmail =
        "admin@gmail.com";

    const correctPassword =
        "123456";


    // CHECK LOGIN

    if (
        emailValue === correctEmail &&
        passwordValue === correctPassword
    ) {

        // Success message

        message.textContent =
            "Login successful!";

        message.style.color = "green";


        // Save login status

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        // Change Sign In button

        const signinButton =
            document.querySelector(".btn-signin");

        if (signinButton) {

            signinButton.textContent =
                "Welcome";

        }


        // Clear input fields

        email.value = "";
        password.value = "";


        // Close dropdown after 1 second

        setTimeout(function() {

            const signinDropdown =
                document.getElementById("signinDropdown");

            if (signinDropdown) {

                signinDropdown.classList.remove("show");

            }

        }, 1000);


    } else {

        // Invalid login

        message.textContent =
            "Invalid email or password.";

        message.style.color = "red";

    }

}


// LOGOUT

function logoutUser(event) {

    if (event) {
        event.preventDefault();
    }


    localStorage.removeItem("isLoggedIn");


    const signinButton =
        document.querySelector(".btn-signin");

    if (signinButton) {

        signinButton.textContent =
            "Sign In";

    }


    alert("You have been logged out.");

}


// MENU DROPDOWN

function toggleMenu(event) {

    if (event) {
        event.stopPropagation();
    }


    const menuDropdown =
        document.getElementById("menuDropdown");

    if (!menuDropdown) {
        return;
    }


    // Close Location

    const locationDropdown =
        document.getElementById("locationDropdown");

    if (locationDropdown) {

        locationDropdown.classList.remove("show");

    }


    const locationPicker =
        document.querySelector(".location-picker");

    if (locationPicker) {

        locationPicker.classList.remove("active");

    }


    // Close Sign In

    const signinDropdown =
        document.getElementById("signinDropdown");

    if (signinDropdown) {

        signinDropdown.classList.remove("show");

    }


    // Toggle Menu

    menuDropdown.classList.toggle("show");

}


// MENU ITEMS

function openProfile(event) {

    if (event) {
        event.preventDefault();
    }

    window.location.href = "profile.html";

}


function openBookings(event) {

    if (event) {
        event.preventDefault();
    }

    alert("My Bookings page will open here.");

}


function openOffers(event) {

    if (event) {
        event.preventDefault();
    }

    alert("Offers page will open here.");

}


function openHelp(event) {

    if (event) {
        event.preventDefault();
    }

    alert("Help & Support page will open here.");

}


// CLOSE DROPDOWNS OUTSIDE

document.addEventListener(
    "click",
    function(event) {

        const locationPicker =
            document.querySelector(".location-picker");

        const signinWrapper =
            document.querySelector(".signin-wrapper");

        const menuWrapper =
            document.querySelector(".menu-wrapper");


        const locationDropdown =
            document.getElementById("locationDropdown");

        const signinDropdown =
            document.getElementById("signinDropdown");

        const menuDropdown =
            document.getElementById("menuDropdown");


        // Close Location

        if (
            locationPicker &&
            !locationPicker.contains(event.target)
        ) {

            if (locationDropdown) {

                locationDropdown.classList.remove("show");

            }

            locationPicker.classList.remove("active");

        }


        // Close Sign In

        if (
            signinWrapper &&
            !signinWrapper.contains(event.target)
        ) {

            if (signinDropdown) {

                signinDropdown.classList.remove("show");

            }

        }


        // Close Menu

        if (
            menuWrapper &&
            !menuWrapper.contains(event.target)
        ) {

            if (menuDropdown) {

                menuDropdown.classList.remove("show");

            }

        }

    }
);


// CHECK LOGIN WHEN PAGE LOADS

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const isLoggedIn =
            localStorage.getItem("isLoggedIn");

        const signinButton =
            document.querySelector(".btn-signin");


        if (
            isLoggedIn === "true" &&
            signinButton
        ) {

            signinButton.textContent =
                "Welcome";

        }

    }
);


// SEARCH MOVIES / EVENTS / SHOWS

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("searchInput");

    const searchableCards =
        document.querySelectorAll(".searchable-card");


    if (!searchInput) {
        return;
    }


    // SEARCH WHILE TYPING

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.trim().toLowerCase();


        searchableCards.forEach(function (card) {

            const cardText =
                card.textContent.toLowerCase();


            if (
                searchText === "" ||
                cardText.includes(searchText)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });


    // PRESS ENTER

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            const searchText =
                searchInput.value.trim().toLowerCase();


            if (searchText === "") {
                return;
            }


            // Find matching card

            for (let card of searchableCards) {

                const cardText =
                    card.textContent.toLowerCase();


                if (cardText.includes(searchText)) {

                    // Open the card

                    card.click();

                    return;

                }

            }


            // No result

            alert(
                "No movies, events or shows found for: "
                + searchInput.value
            );

        }

    });

});