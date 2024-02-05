const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2749f4c47amsh97423363fe8145cp1a72fajsnc365ea6095f1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {777
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options) //+city s dyanmic allocation 
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    sunrise.innerHTML = response.sunrise
    
})
.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault() //doesnt reload the page
    getWeather(city.value)
})

getWeather("Seattle")


const usageGuideLink = document.querySelector('.usage-guide-link');
const usageGuideModal = new bootstrap.Modal(document.getElementById('usageGuideModal'));

usageGuideLink.addEventListener('click', () => {
  usageGuideModal.show();
});
// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
        
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData(); // Call the async function
