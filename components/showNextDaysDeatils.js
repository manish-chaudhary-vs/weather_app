export function showTempOfThreeDays(data) {
    for (let i = 8; i <= 24; i += 8) {
      let day = data.list[i].dt_txt.slice(0, 10);
      let tempDay = Math.floor(data.list[i].main.temp);
      let daysListContainer = document.querySelector(".daysList");
      let li = document.createElement("li");
      li.innerHTML = `Date: ${day}`;
      daysListContainer.appendChild(li);
      let para = document.createElement("p");
      para.innerHTML = `Temp: ${tempDay}°C`;
      li.appendChild(para);
    }
}
  