async function getWeather(){

let city=document.getElementById("cityInput").value;

let result=document.getElementById("weatherResult");

if(city===""){
result.innerHTML="Please enter a city name";
return;
}

result.innerHTML="Loading weather... ⏳";

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=154512e8f73de2b7ae73c42cfbc91143`;

try{

let response=await fetch(url);

let data=await response.json();

if(data.cod==404){
result.innerHTML="City not found ❌";
return;
}

let temp=data.main.temp;

let weather=data.weather[0].main;

let icon=data.weather[0].icon;

let iconUrl=`https://openweathermap.org/img/wn/${icon}@2x.png`;

result.innerHTML=`
<h2>${city}</h2>
<img src="${iconUrl}">
<p>Temperature: ${temp}°C</p>
<p>Weather: ${weather}</p>
`;

}
catch(error){
result.innerHTML="Unable to fetch weather ⚠️";
}

}