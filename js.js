
// curent temperature + geolacation

function showTemperature(responce){
    let temperature = Math.round(responce.data.main.temp)
    let heading = document.querySelector("h1")
    heading.innerHTML= `Current temperature is ${temperature}C`
    }

    function retrievePosition(position)
    {
    let lat = (position.coords.latitude);
    let lon =(position.coords.longitude);
    let units = "metric"
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    }
    axios.get(apiUrl).then(showTemperature)

    // curent temperature + geolacation


    function showTemperature(response) {
        let h1 = document.querySelector("#city");
        let temperature = Math.round(response.data.main.temp);
        let temperatureElement = document.querySelector("#temperature");
        let description = document.querySelector("#temperature-description");
        h1.innerHTML = response.data.name;
        temperatureElement.innerHTML = `${temperature}°C`;
        description.innerHTML = response.data.weather[0].description;
      }
      


      function showPosition(position) {
        let h1 = document.querySelector("h1");
        h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your
        longitude is ${position.coords.longitude}`;
        console.log();
        console.log(position.coords.longtiude);
      }
      function getCurrentPositon() {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
      
      let button = document.querySelector("button");
      button.addEventListener("click", getCurrentPositon);
      


// current date
      let now = new Date();
      let h2 = document.querySelector("h2");
      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let year = now.getFullYear();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      let day = days[now.getDay()];
      let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let month = months[now.getMonth()];
      h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;   
// current date

      function search(event) {
        event.preventDefault();
        let searchInput = document.querySelector("#search-text-input");
        let h1 = document.querySelector("h1");
        if (searchInput.value) {
          h1.innerHTML = `Search for ${searchInput.value}...`;
          searchCity(searchInput.value);
        } else {
          h1.innerHTML = null;
          alert("Please type a city");
        }
      }
      function searchCity(city) {
        let apiKey = "6cd0b66db68ec702cf737675d887b164";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
        axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
      }
      let form = document.querySelector("#search-form");
      form.addEventListener("submit", search);