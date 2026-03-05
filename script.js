async function getWeather(){

let city=document.getElementById("cityInput").value;

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`;

let response=await fetch(url);

let data=await response.json();

if(data.cod=="404"){
document.getElementById("weatherResult").innerHTML="City not found";
return;
}

let temp=data.main.temp;

let weather=data.weather[0].main;

document.getElementById("weatherResult").innerHTML=
`Temperature: ${temp}°C <br> Weather: ${weather}`;

}