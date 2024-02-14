import fetchingAPI from "../components/fetchAPI.js";
import * as errors from "../components/error.js";
import * as showData from "../components/showData.js";
import * as forecast from "../components/showNextDaysDeatils.js";
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", async () => {
  const inputBox = document.getElementById("searchBox");
  let cityName = inputBox.value;
  let data = await fetchingAPI(cityName);
    errors.displayErrors(data.cod);
    showData.showDataToUser(data);
    inputBox.value = "";
    let daysListContainer = document.querySelector(".daysList");
    daysListContainer.innerHTML = "";
    forecast.showTempOfThreeDays(data);
  // }
});
