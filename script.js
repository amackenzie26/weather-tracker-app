var formEl = document.querySelector(".form");
var inputEl = document.querySelector(".search-box");
var buttonEl = document.querySelector(".search-btn");
var selectEl = document.querySelector(".options");

var cities = JSON.parse(localStorage.getItem('cities'));
    if(JSON.parse(localStorage.getItem('cities')) !== null) {
        var cities = JSON.parse(localStorage.getItem('cities')); 
    } else {
        var cities = [];
    }
    

const addCity = (ev)=>{
    // ev.preventDefault();
    let city = {
            id: Date.now(),
            city: document.getElementById('search-box').value
    }
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities) );
    // document.forms[0].reset(); 
}

$(document).ready(function () {
    createCityButtons()
});

function createCityButtons() {
        if (cities.length > 0) {
            for (var i = 0; i < cities.length; i++) {
                var btn = $("<button>")
                btn.addClass("searchbtns");
                btn.text(cities[i].city)
                $('#searches').append(btn);
                }
        }
    
}

function searchRequest(event) {
    event.preventDefault();

    addCity();
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

    console.log(data.daily[1])

    document.getElementById('todaysweather').innerHTML = `<h3>Today:</h3><ul><li>Temperature: ${weatherToday.temp}</li>
    <li>Humidity: ${weatherToday.humidity}</li><li>UV Index: ${weatherToday.uvi}</li><li> Wind Speed: ${weatherToday.wind_speed}</li><li> Weather: ${weatherToday.weather[0].description}</li><li> Weather: ${weatherToday.weather[0].icon}</li></ul>`

    document.getElementById('Day 1').innerHTML = `<h4>5 Day Forecast:</h4><ul><li>Temperature: ${weatherDay1.temp}</li>
    <li>Humidity: ${weatherDay1.humidity}</li><li>UV Index: ${weatherDay1.uvi}</li><li> Wind Speed: ${weatherDay1.wind_speed}</li><li> Weather: ${weatherDay1.weather[0].description}</li><li> Weather: ${weatherDay1.weather[0].icon}</li></ul>`

    document.getElementById('Day 2').innerHTML = `<ul><li>Temperature: ${weatherDay2.temp}</li>
    <li>Humidity: ${weatherDay2.humidity}</li><li>UV Index: ${weatherDay2.uvi}</li><li> Wind Speed: ${weatherDay2.wind_speed}</li><li> Weather: ${weatherDay2.weather[0].description}</li><li> Weather: ${weatherDay2.weather[0].icon}</li></ul>`

    document.getElementById('Day 3').innerHTML = `<ul><li>Temperature: ${weatherDay3.temp}</li>
    <li>Humidity: ${weatherDay3.humidity}</li><li>UV Index: ${weatherDay3.uvi}</li><li> Wind Speed: ${weatherDay3.wind_speed}</li><li> Weather: ${weatherDay3.weather[0].description}</li><li> Weather: ${weatherDay3.weather[0].icon}</li></ul>`

    document.getElementById('Day 4').innerHTML = `<ul><li>Temperature: ${weatherDay4.temp}</li>
    <li>Humidity: ${weatherDay4.humidity}</li><li>UV Index: ${weatherDay4.uvi}</li><li> Wind Speed: ${weatherDay4.wind_speed}</li><li> Weather: ${weatherDay4.weather[0].description}</li><li> Weather: ${weatherDay4.weather[0].icon}</li></ul>`
    document.getElementById('Day 5').innerHTML = `<ul><li>Temperature: ${weatherDay5.temp}</li>
    <li>Humidity: ${weatherDay5.humidity}</li><li>UV Index: ${weatherDay5.uvi}</li><li> Wind Speed: ${weatherDay5.wind_speed}</li><li> Weather: ${weatherDay5.weather[0].description}</li><li> Weather: ${weatherDay5.weather[0].icon}</li></ul>`
 
            })
        }
        
    });
            })
        }
    });
    createCityButtons();
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('search-btn').addEventListener('click', searchRequest);

});

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

// console.log('added', {cities} );
// let pre = document.querySelector('#msg pre');
// pre.textContent = '\n' + JSON.stringify(cities, '\t', 2);








































