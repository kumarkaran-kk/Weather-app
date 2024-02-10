const apiKey="3749334cbea6c45376f910df4e0371b9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchButton=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon");


async function checkWhether(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".card").style.top="14rem"

    }
    else {
        const data= await response.json();
        
        console.log(data);
        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity;
        document.querySelector(".wind").innerHTML= data.wind.speed + "Km/hr";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/clear.png"
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/rain.png"
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png"
        }
    
        document.querySelector(".weather").style.display="block"
        document.querySelector(".card").style.top="5rem"
        
        document.querySelector(".error").style.display="none";
    }
}

searchButton.addEventListener("click", ()=>{
    checkWhether(searchBox.value);
})
