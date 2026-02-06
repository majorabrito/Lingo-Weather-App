function searchFormCity(event) {
    event.preventDefault();
    let searchElement = document.querySelector("#search-form-input");
let city = document.querySelector("#city");
city.innerHTML= searchElement.value; 
console.log(searchElement);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchFormCity);

