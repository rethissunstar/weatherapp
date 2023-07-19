var cityName = 'Toronto';
var stateName = 'Ontario';
var countryCode = 'CA';
var apiKey = '8822afbe38e751d526fa225aa1e81c83';
let lonAndlat = 'this';
let lon = '-79.4163';
let lat = '43.7001';
let day1pane = document.getElementById('day1');
let dayFind= document.getElementById('day'+1);
// fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?appid='+apiKey,{
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     }
// })

    // .then(function (response){
    //     console.log(response);
    //     // return response;
    // })
    // .then(function(data){
    //     console.log(data);
    // })

//from the analysis 
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=Toronto,CA&limit=5&appid=8822afbe38e751d526fa225aa1e81c83", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  

fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=" +lat +"&"+"lon="+lon+"&appid=" +  apiKey)
    .then(function (response){
        console.log('this happened')
        //localStorage.setItem(lonAndlat, JSON.stringify(response.json))
        
        return response.json();
    })
    .then(function (data){
        console.log(data);
        //remember you have to iterate on dayPaste you may beed to create a new variable
        //inserting the for loop
        for (var i = 0; i<5; i++){
            let dayPaste= document.getElementById('day'+(i+1));
            dayPaste.style.fontSize = '24pt';
            dayPaste.innerHTML = data.list[i].main.temp + '&#176' +"C";
            const imgElement = document.createElement("img" );
            imgElement.src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png"
            dayPaste.appendChild(imgElement);
            //create a list where we are going to add the description of weather condition, the wind speed and the humidity
            //so we have to append a list then we have to append to the list the listed attributes and make sure to format without the ul nonsense.
            const listElement = document.createElement('ul');
            listElement.style.fontSize = '16pt';
            listElement.innerHTML = `Conditions: `+ data.list[i].weather[0].main  +`\n Wind Speed: ` + data.list[i].wind.speed + `m/s` + `\n` +`humidity: ` + data.list[i].main.humidity;
            //this is a terrible API - units are everything.
            dayPaste.appendChild(listElement);
        }
        // let dayPaste= document.getElementById('day'+1);
        // dayPaste.style.fontSize = '24pt';
        // dayPaste.innerHTML = data.list[0].main.temp + '&#176' +"C";
        // const imgElement = document.createElement("img" );
        // imgElement.src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
        // dayPaste.appendChild(imgElement);
        // //create a list where we are going to add the description of weather condition, the wind speed and the humidity
        // //so we have to append a list then we have to append to the list the listed attributes and make sure to format without the ul nonsense.
        // const listElement = document.createElement('ul');
        // listElement.style.fontSize = '16pt';
        // listElement.innerHTML = `Conditions: `+ data.list[0].weather[0].main  +`\n Wind Speed: ` + data.list[0].wind.speed + `m/s` + `\n` +`humidity: ` + data.list[0].main.humidity;
        // //this is a terrible API - units are everything.
        // dayPaste.appendChild(listElement);
    
        // const windText = listElement.textContent('Placeholder2');
        // const humidText = listElement.textContent('Placeholder3');
        

        // for (var i=0; i<5; i++){
        //     console.log('there is something here ' + i)
        //     console.log(data[i]);
        //     let dayPaste = document.getElementById('day'+i);
        //     dayPaste.innerHTML = 'the Temp is' + data[i].list[i].main.temp;

        }
        //console.log(data);
    )