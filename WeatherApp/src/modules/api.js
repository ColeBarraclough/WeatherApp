async function getWeatherJson() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=5913490&appid=812094d10dc57aeb1bbaf6899556b3c6', {mode: 'cors'});
    const result = await response.json();
    console.log(result);
    return result;
}

function setElement(id, temp) {
    document.getElementById(id).innerText += temp;
}


function setDocument() {
    let weather = getWeatherJson();
    weather.then(function(data) {
        setElement("temperature", (data['main']['temp'] - 273.15).toFixed(2) + "°C");
        setElement("feels-like", ": " + (data['main']['feels_like'] - 273.15).toFixed(2) + "°C");
        setElement("weather", ": " + data['weather'][0]['description']);
        setElement("wind", ": " + data['wind']['speed'] + "km/h");
    });
    
}
export default setDocument;