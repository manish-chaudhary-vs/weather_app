export default async function fetchingAPI(cityName) {
    const apiKey = "dff276d24f910ecef4552830862887e8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric`;
    const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);
    const data = await response.json();
    return data;
  }