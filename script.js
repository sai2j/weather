const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const cityName = document.getElementById("city-Name");
const cityTime = document.getElementById("city-Time");
const cityTemp = document.getElementById("city-Temp");

async function getData(cityName)
{
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=a77f874891dd4b12bd7163939241505&q=${cityName}&aqi=yes`)
    return await promise.json();
}


button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText= `${result.location.name}, ${result.location.result} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    console.log(result);
});