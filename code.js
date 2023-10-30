//     fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=" +lat +"&"+"lon="+lon+"&appid=" +  apiKey)
//         .then(function (response){
//             console.log('this happened')
//             //localStorage.setItem(lonAndlat, JSON.stringify(response.json))

//             return response.json();
//         })
//         .then(function (data){
//             console.log(data);
//             //remember you have to iterate on dayPaste you may beed to create a new variable
//             //inserting the for loop
//             for (var i = 0; i<5; i++){
//                 let dayPaste= document.getElementById('day'+(i+1));
//                 dayPaste.style.fontSize = '24pt';
//                 dayPaste.innerHTML = data.list[i].main.temp + '&#176' +"C";
//                 const imgElement = document.createElement("img" );
//                 imgElement.src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png"
//                 dayPaste.appendChild(imgElement);
//                 //create a list where we are going to add the description of weather condition, the wind speed and the humidity
//                 //so we have to append a list then we have to append to the list the listed attributes and make sure to format without the ul nonsense.
//                 const listElement = document.createElement('ul');
//                 listElement.style.fontSize = '16pt';
//                 listElement.innerHTML = `Conditions: `+ data.list[i].weather[0].main  +`\n Wind Speed: ` + data.list[i].wind.speed + `m/s` + `\n` +`humidity: ` + data.list[i].main.humidity;
//                 //this is a terrible API - units are everything.
//                 dayPaste.appendChild(listElement);
//             }
//             // let dayPaste= document.getElementById('day'+1);
//             // dayPaste.style.fontSize = '24pt';
//             // dayPaste.innerHTML = data.list[0].main.temp + '&#176' +"C";
//             // const imgElement = document.createElement("img" );
//             // imgElement.src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
//             // dayPaste.appendChild(imgElement);
//             // //create a list where we are going to add the description of weather condition, the wind speed and the humidity
//             // //so we have to append a list then we have to append to the list the listed attributes and make sure to format without the ul nonsense.
//             // const listElement = document.createElement('ul');
//             // listElement.style.fontSize = '16pt';
//             // listElement.innerHTML = `Conditions: `+ data.list[0].weather[0].main  +`\n Wind Speed: ` + data.list[0].wind.speed + `m/s` + `\n` +`humidity: ` + data.list[0].main.humidity;
//             // //this is a terrible API - units are everything.
//             // dayPaste.appendChild(listElement);

//             // const windText = listElement.textContent('Placeholder2');
//             // const humidText = listElement.textContent('Placeholder3');

//             // for (var i=0; i<5; i++){
//             //     console.log('there is something here ' + i)
//             //     console.log(data[i]);
//             //     let dayPaste = document.getElementById('day'+i);
//             //     dayPaste.innerHTML = 'the Temp is' + data[i].list[i].main.temp;

//             }
//             //console.log(data);
//         )

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

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

// //   fetch("https://api.openweathermap.org/geo/1.0/direct?q=${cityName},CA&limit=5&appid=8822afbe38e751d526fa225aa1e81c83", requestOptions)
// //     .then(response => response.text())
// //     .then(result => console.log(result))
// //     .catch(error => console.log('error', error));

// // function fetchData() {
// //     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},CA&limit=5&appid=8822afbe38e751d526fa225aa1e81c83`, requestOptions)
// //       .then(response => response.json())
// //       .then(data => {
// //         const lon = data[0].lon;
// //         const lat = data[0].lat;
// //         console.log('Longitude:', longitude);
// //         console.log('Latitude:', latitude);
// //         // Do further processing with longitude and latitude values
// //       })
// //       .catch(error => console.log('error', error));
// //   }

// //   fetchData();
// let getCoord = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apiKey + "&units=imperial";

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
