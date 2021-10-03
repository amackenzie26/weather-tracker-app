var formEl = document.querySelector(".form");
var inputEl = document.querySelector(".input-search");
var buttonEl = document.querySelector(".search-btn");
var selectEl = document.querySelector(".options");

function searchRequest(event) {
    event.preventDefault();

    
     var apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl.value + "&appid=f6591845cbace330d3376dc66277602d";

    fetch(apiURL).then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data);
            })
        }
    });
    
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat={}}&lon={}&exclude={part}&appid=f6591845cbace330d3376dc66277602d";

    fetch(apiURL).then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data)
            
            })
        }
    });
}

localStorage.setItem('searchedCityList', JSON.stringify(cityArr) );





// buttonEl.addEventListener("click", searchRequest);










































