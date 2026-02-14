function displayTemperature(response){
   let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#Humidity");
    let windElement = document.querySelector("#Wind");
    let descriptionElement = document.querySelector("#description");
    let dateElement = document.querySelector(".weather-app-date");
    let iconElement = document.querySelector("#icon");

    let temperature = Math.round(response.data.main.temp);
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let description = response.data.weather[0].description;
    let icon = response.data.weather[0].icon;

    cityElement.innerHTML = response.data.name; 
    temperatureElement.innerHTML = temperature;
    humidityElement.innerHTML = `${humidity}%`;
    windElement.innerHTML = `${wind}km/h`;
    descriptionElement.innerHTML = `, ${description}`;
    iconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="weather-app-icon" />`;
    
    dateElement.innerHTML = displayDateAndHour(response.data.dt);

    getForecast(response.data.name);
}

function displayDateAndHour(timestamp) {
    let now = new Date(timestamp * 1000);
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let day = days[now.getDay()];

if (minutes < 10) {
    minutes =`0${minutes}`;
};

return `${day} ${hours}:${minutes}`;
}

function formatDayForecast(timestamp){
    let date = new Date (timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days [date.getDay()];
}

function getForecast(city){
    let apiKey = "6b6a2d3686b7a15a7b03d3319d1627b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
     axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
    console.log(response.data);
   
        
    let forecastHtml = "";

    response.data.list.forEach(function (day, index){
         if (index % 8 === 0) {

{ forecastHtml = 
    forecastHtml + `
    <div class="weather-app-forecast-day-container">
    <div class="weather-app-forecast-date">${formatDayForecast(day.dt)}</div>
<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="weather-app-forecast-icon" />
    <div class="weather-app-forecast-temperatures-container">
    <div class="weather-app-forecast-temperature">
    <strong>${Math.round(day.main.temp_max)}</strong>º</div>
     <div class="weather-forecast-temperature">${Math.round(day.main.temp_min)}º</div>
    </div>
    </div>` 
    }}

});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

function searchData(city){
    let apiKey="6b6a2d3686b7a15a7b03d3319d1627b9"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
     axios.get(apiUrl).then(displayTemperature);
}

function searchFormCity(event) {
    event.preventDefault();
    let searchElement = document.querySelector("#search-form-input");
let city = document.querySelector("#city");
searchData(searchElement.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchFormCity);


searchData("Malaga");
