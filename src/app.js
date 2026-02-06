function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
let temperature = Math.round(response.data.main.temp);
    temperatureElement.innerHTML = temperature;
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
city.innerHTML= searchElement.value; 

searchData(searchElement.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchFormCity);

