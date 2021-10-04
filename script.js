var formEl = document.querySelector(".form");
var inputEl = document.querySelector(".search-box");
var buttonEl = document.querySelector(".search-btn");
var selectEl = document.querySelector(".options");

let cities = [];

const addCity = (ev)=>{
    ev.preventDefault();
    let city = {
            id: Date.now(),
            city: document.getElementById('search-box').value
    }
    cities.push(city);
    document.forms[0].reset(); 
    
    console.log('added', {cities} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(cities, '\t', 2);

    localStorage.setItem('searchedCityList', JSON.stringify(cities) );
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('search-btn').addEventListener('click', searchRequest);
});

function searchRequest(event) {
    event.preventDefault();

    
     var apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl.value + "&appid=f6591845cbace330d3376dc66277602d";

    fetch(apiURL).then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data);
    
    var lat = data[0].lat 
    var lon = data[0].lon 

    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=f6591845cbace330d3376dc66277602d";

    fetch(apiURL).then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data)
            
    
    var weatherToday = data.current
    var weatherDay1 = data.daily[1]
    var weatherDay2 = data.daily[2]
    var weatherDay3 = data.daily[3]
    var weatherDay4 = data.daily[4]
    var weatherDay5 = data.daily[5]

    console.log(data.daily[1]);

    weatherToday.insertAdjacentHTML('beforeend', '<p id=todaysweather></p>');

            })
        }
        
    });
            })
        }
    });
}

// create elements and append to hmtl

// const api = {
//     key: "f6591845cbace330d3376dc66277602d",
//     base: "https://api.openweathermap.org/data/2.5/"
// }

// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress', setQuery);

// function setQuery(evt) {
//     if (evt.keyCode == 13) {
//         getResults(searchbox.value);
//         console.log(searchbox.value);
//     } 
// }

// function getResults (query) {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then(weather => {
//         return weather.json();
//     }).then(displayResults);
// }

// function displayResults (weather) {
//     console.log(weather);
//     let city = document.querySelector('.location .city');
//     city.innerText = `${weather.name}, ${weather.sys.country}`;

//     let now = new Date();
//     let date = document.querySelector('.location .date');
//     date.innerText = dateBuilder(now);

//     let temp = document.querySelector('.current .temp');
//     temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//     let weatherEL = document.querySelector('.current .weather');
//     weatherEL.innerText = weather.weather[0].main;

//     let hilow = document.querySelector('.hi-low');
//     hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
// }

// function dateBuilder (d) {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonths()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;










































