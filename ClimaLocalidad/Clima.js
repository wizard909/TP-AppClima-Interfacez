
const api= {
      key: "c121c27afae5d638d48cfa32c8404f98",
      url: "https://api.openweathermap.org/data/2.5/"
}

var lat = JSON.parse(localStorage.getItem('lat'));
var lng = JSON.parse(localStorage.getItem('lng'));


fetch (`${api.url}onecall?lat=${lat}&lon=${lng}&exclude=current,hourly&appid=${api.key}`)//
      .then(weather => weather.json())
      .then(mostrarResultados)

function mostrarResultados(weather){

      let now = new Date();
      let fechaTextEdit = document.querySelector('.FechaTextEdit');
      fechaTextEdit.innerText = dateBuilder(now);

      let grados = document.querySelector('.NumeroGradoTextEdit');
      grados.innerText = `${Math.round(weather.daily[0].temp.day)}`;

      var url="http://openweathermap.org/img/wn/";
      var icon=`${weather.daily[0].weather[0].icon}`;
      var urlFinal = "@2x.png"
      document.getElementById("IconWeather").src = url + icon + urlFinal;

      let weather_el = document.querySelector('.SoleadoTextEdit');
      weather_el.innerText=`${weather.daily[0].weather[0].main}`;

      let weatherIcon = document.querySelector('.FrameSoleadoIcon');
      weatherIcon.innerText=`${weather.daily[0].weather.icon}`;

      let hi = document.querySelector('.NumeroTemperaturaVariacionAltaTextEdit');
      hi.innerText = `${Math.round(weather.daily[0].temp.max)}`;

      let low = document.querySelector('.NumeroTemperaturaVariacionBajaTextEdit');
      low.innerText = `${Math.round(weather.daily[0].temp.min)}`;

      let city = document.querySelector('.LocalizacionTextEdit');
      city.innerText = `${weather.timezone}`;

      let humidity = document.querySelector('.NumeroHumedadTextEdit');
      humidity.innerText = `${weather.daily[0].humidity}`;

      let pressure = document.querySelector('.NumeroPresionTextEdit');
      pressure.innerText = `${Math.round(weather.daily[0].pressure)}`;

      let wind = document.querySelector('.NumeroVientoTextEdit');
      wind.innerText = `${weather.daily[0].wind_speed}`;

      
      let sunrise = document.querySelector('.NumeroTiempoLevantarseTextEdit');
      sunrise.innerText = UTCDate(weather.daily[0].sunrise);
      
      let sunset = document.querySelector('.NumeroTiempoPuestaDeSolTextEdit');
      sunset.innerText = UTCDate(weather.daily[0].sunset);

      let daytime = document.querySelector('.NumeroTiempoDeDIaTextEdit');
      daytime.innerText = UTCDate(weather.daily[0].dt);

      //Clima dia 1
    
      var url="http://openweathermap.org/img/wn/";
      var icon=`${weather.daily[1].weather[0].icon}`;
      var urlFinal = "@2x.png"
      document.getElementById("IconWeather2").src = url + icon + urlFinal;

      //Cambiar NOMBRE dia
      //let nombredia1 = document.querySelector('.NombreDia1EditEdit');
      //nombredia1.innerText = `${weather.daily[1].humidity}`;

      let hiDia1 = document.querySelector('.NumeroTemperaturaVariacionAltaDia1TextEdit');
      hiDia1.innerText = `${Math.round(weather.daily[1].temp.max)}`;
      let lowDia1 = document.querySelector('.NumeroTemperaturaVariacionBajaDia1TextEdit');
      lowDia1.innerText = `${Math.round(weather.daily[1].temp.min)}`;

      //Clima dia 2
      var url="http://openweathermap.org/img/wn/";
      var icon=`${weather.daily[2].weather[0].icon}`;
      var urlFinal = "@2x.png"
      document.getElementById("IconWeather3").src = url + icon + urlFinal;

      let hiDia2 = document.querySelector('.NumeroTemperaturaVariacionAltaDia2TextEdit');
      hiDia2.innerText = `${Math.round(weather.daily[2].temp.max)}`;
      let lowDia2 = document.querySelector('.NumeroTemperaturaVariacionBajaDia2TextEdit');
      lowDia2.innerText = `${Math.round(weather.daily[2].temp.min)}`;

      //Clima dia 3
      var url="http://openweathermap.org/img/wn/";
      var icon=`${weather.daily[3].weather[0].icon}`;
      var urlFinal = "@2x.png"
      document.getElementById("IconWeather4").src = url + icon + urlFinal;

      let hiDia3 = document.querySelector('.NumeroTemperaturaVariacionAltaDia3TextEdit');
      hiDia3.innerText = `${Math.round(weather.daily[3].temp.max)}`;
      let lowDia3 = document.querySelector('.NumeroTemperaturaVariacionBajaDia3TextEdit');
      lowDia3.innerText = `${Math.round(weather.daily[3].temp.min)}`;
}

function dateBuilder (d) {
      let months = ["January", "Febrary", "March","April", "May", "June", "July", 
      "August", "September", "October", "Nobember", "December"];

      let days = ["Sunday", "Monday" ,"Tuesday", "Wednesday", "Thursday", 
      "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
}

function UTCDate(timeStamp){
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(timeStamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      return hours + ':' + minutes.substr(-2);

}