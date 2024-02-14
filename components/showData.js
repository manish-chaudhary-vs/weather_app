export function showDataToUser(data) {
    let cityValue = document.querySelector(".city");
    cityValue.innerHTML = `${data.city.name}`;
    let tempValue = document.querySelector(".temp");
    let humidityValue = document.querySelector(".humidity");
    let windSpeed = document.querySelector(".wind");
    let weatherImage = document.querySelector(".weather_icon");
    tempValue.innerHTML = `${Math.floor(data.list[0].main.temp)}°C`;
    humidityValue.innerHTML = `${data.list[0].main.humidity}% Humidity`;
    let humidityImage = document.querySelector(".humidity_icon");
    humidityImage.src = "../images/humidity.png";
    windSpeed.innerHTML = `${data.list[0].wind.speed} km/h Wind Speed`;
    let windImage = document.querySelector(".wind_icon");
    windImage.src = "../images/wind.png";
    let weatherType = `${data.list[0].weather[0].main}`;
    if (weatherType == "Clear") {
      weatherImage.src = "../images/clear.png";
    } else if (weatherType == "Clouds") {
      weatherImage.src = "../images/cloud.png";
    } else if (weatherType == "Drizzle") {
      weatherImage.src = "../images/drizzle.png";
    } else if (weatherType == "Rain") {
      weatherImage.src = "../images/rain.png";
    } else if (weatherType == "Snow") {
      weatherImage.src = "../images/snow.png";
    }
    
  }