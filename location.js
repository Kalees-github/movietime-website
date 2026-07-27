// GO BACK

function goBack() {

    window.location.href = "index.html";

}

// SELECT CITY

function selectCity(city) {

    // Save selected city
    localStorage.setItem("selectedCity", city);

    // Go back to main page
    window.location.href = "index.html";

}

// SEARCH CITY

function searchCity() {

    const searchInput =
        document.getElementById("citySearch");

    const searchValue =
        searchInput.value.toLowerCase();

    const cities =
        document.querySelectorAll(".city");


    cities.forEach(function(city) {

        const cityName =
            city.querySelector("span")
                .textContent
                .toLowerCase();


        if (cityName.includes(searchValue)) {

            city.style.display = "flex";

        } else {

            city.style.display = "none";

        }

    });

}

// DETECT LOCATION

function detectLocation() {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported by your browser.");

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            alert(
                "Location detected successfully!\n\n" +
                "Latitude: " +
                position.coords.latitude +
                "\nLongitude: " +
                position.coords.longitude
            );

        },

        function(error) {

            alert(
                "Unable to detect your location.\n" +
                "Please select your city manually."
            );

        }

    );

}