function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
let temperature = Math.round(response.data.main.temp);
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#Humidity");
let humidity = response.data.main.humidity;
let windElement = document.querySelector("#Wind");
let wind = response.data.wind.speed;
let descriptionElement = document.querySelector("#description");
let description = response.data.weather[0].description;
let dateElement = document.querySelector(".weather-app-date");
windElement.innerHTML = `${wind}km/h`;
humidityElement.innerHTML= `${humidity}%`;
cityElement.innerHTML= response.data.name;
temperatureElement.innerHTML = temperature;
descriptionElement.innerHTML = `, ${description}`;

dateElement.innerHTML = displayDateAndHour(response.data.dt);

console.log(response.data);
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