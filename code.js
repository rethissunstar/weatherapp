//Once the dom is loaded it will load in the clock.
document.addEventListener("DOMContentLoaded", function () {
  var realtime = dayjs().hour();
  var headEl = document.getElementById("readout");
  var clockEl = document.createElement("p");
  var timerInterval;
  var timercount =
    dayjs().hour() + ":" + dayjs().minute() + ":" + dayjs().second();

  function clockTime() {}

  var timerInterval = setInterval(function () {
    // timercount = "day:" + dayjs().date()+ ':' + "of month: "+ (dayjs().month()+1) + ' :' + dayjs().hour() + ':' + dayjs().minute() + ':' + dayjs().second();
    timercount = dayjs().format("YYYY-MM-DD HH:mm:ss");
    clockEl.innerHTML = "time: " + timercount;
  }, 1000);

  headEl.appendChild(clockEl);
  clockTime();
  console.log(realtime);
});
//This is the code to dynamically update the cards with an ajax call to the weatherAPI: OpenWeather
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", function () {
    const cityNameInput = document.getElementById("cityName");
    const cityName = cityNameInput.value;
    //const countryCodeInput = document.getElementById('countryCode');
    //const countryCode = countryCodeInput.value;
    const apiKey = "8822afbe38e751d526fa225aa1e81c83";

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&APPID=" +
        apiKey +
        "&units=imperial",
      method: "GET",
      success: function (data) {
        const lon = data.coord.lon;
        const lat = data.coord.lat;
        console.log("Longitude:", lon);
        console.log("Latitude:", lat);

        fetch(
          "https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=" +
            lat +
            "&lon=" +
            lon +
            "&appid=" +
            apiKey
        )
          .then((response) => response.json())
          .then((data) => {
            for (var i = 0; i < 5; i++) {
              let dayPaste = document.getElementById("day" + (i + 1));
              dayPaste.style.fontSize = "24pt";
              dayPaste.innerHTML = data.list[i].main.temp + "&#176;C";
              const imgElement = document.createElement("img");
              imgElement.src =
                "https://openweathermap.org/img/wn/" +
                data.list[i].weather[0].icon +
                "@2x.png";
              dayPaste.appendChild(imgElement);
              const listElement = document.createElement("ul");
              listElement.style.fontSize = "16pt";
              listElement.innerHTML = `Conditions: ${data.list[i].weather[0].main}<br>Wind Speed: ${data.list[i].wind.speed} m/s<br>Humidity: ${data.list[i].main.humidity}`;
              dayPaste.appendChild(listElement);
            }
          })
          .catch((error) => console.log("Error:", error));
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });
});
