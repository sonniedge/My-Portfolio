const apiKey = "1f86f8122748e0c11ee5f97137e9dde3";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

async function checkWeather(city) {
    const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        // Display data
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";

        // Set weather icon based on the weather condition
        const condition = data.weather[0].main;
        const iconMap = {
            Clouds: "clouds.png",
            Clear: "clear.png",
            Rain: "rain.png",
            Drizzle: "drizzle.png",
            Mist: "mist.png",
            Humidity: "humidity.png",
            Storm: "storm.png",
            Snow: "snow.png",
            Hot: "hot.png",
            Haze: "haze.png",
            Fog: "fog.png",
            Wind: "wind.png"
        };
        weatherIcon.src = `images/${iconMap[condition] || "default.png"}`;

        // Determine day or night using sunrise and sunset data
        const currentTime = new Date().getTime() / 1000;
        const isDay = currentTime > data.sys.sunrise && currentTime < data.sys.sunset;

        if (isDay) {
            card.classList.add("day");
            card.classList.remove("night");
        } else {
            card.classList.add("night");
            card.classList.remove("day");
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event listeners
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optional: Default city on page load
checkWeather("Bissau");
