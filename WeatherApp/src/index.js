

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=5913490&appid=812094d10dc57aeb1bbaf6899556b3c6', {mode: 'cors'});
    const result = await response.json();
    return result;
}

console.log(getWeather());
