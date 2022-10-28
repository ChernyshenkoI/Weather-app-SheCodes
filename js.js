function showTemperature(responce){
    let temperature= Math.round(responce.data.main.temp)
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

    axios.get(apiUrl).then(showTemperature)
