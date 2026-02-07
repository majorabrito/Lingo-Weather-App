function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
let temperature = Math.round(response.data.main.temp);
let humidityElement = document.querySelector("#Humidity");
let humidity = response.data.main.humidity;
let windElement = document.querySelector("#Wind");
let wind = response.data.wind.speed;
windElement.innerHTML = `${wind}km/h`;
humidityElement.innerHTML= `${humidity}%`;
city.innerHTML= response.data.name;
    temperatureElement.innerHTML = temperature;

    console.log(wind);
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
