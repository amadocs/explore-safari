let wname = document.getElementById('wname');
let desc = document.getElementById('desc');
let mintemp = document.getElementById('mintemp');
let maxtemp = document.getElementById('maxtemp');
let windspeed = document.getElementById('windspeed');


const element = document.getElementById('weather-info');
function weatherInfo() {
  const cityName = 'Kasane';

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&appid=b4573d2ecf25b6c2f532ec7d25ed457f'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data['name'];
      var mintempValue = data['main']['temp_min'];
      var maxtempValue = data['main']['temp_max'];
      var descValue = data['weather'][0]['description'];
      var windSpeed = data['wind']['speed'];

      wname.innerHTML = nameValue;
      mintemp.innerHTML += mintempValue;
      maxtemp.innerHTML += maxtempValue;
      desc.innerHTML = descValue;
      windspeed.innerHTML += windSpeed; 
      
      
    })

    .catch((err) => alert('Wrong city name'));
}