const API_KEY = '3d31e194e08946cf884200450242210';  // Wprowadź swój klucz API AccuWeather
const City = 'Warszawa';  // Wprowadź klucz lokalizacji (np. Warszawa)

async function getWeatherConditions(locationKey: string) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${City}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Błąd w pobieraniu danych');
        }

        const data = await response.json();
        const weather = data['current'];

        console.log(<JSON>weather)

        displayWeatherInfo(weather);

    } catch (error) {
        console.error('Błąd:', error);
    }
}

function displayWeatherInfo(weather: any) {
    const weatherInfoDiv = document.getElementById('weather-info');


    if (weatherInfoDiv) {
        weatherInfoDiv.innerHTML = `
            <p>Temperatura: ${weather.temp_c}°C</p>
            <p>Warunki: ${weather.condition.text}</p>
            <img src="${weather.condition.icon}" alt="">
            <p>Wiatr: ${weather.wind_kph}km/h</p>
            <p>Wilgotnosc: ${weather.humidity}%</p>
        `;
    }
}

// Uruchom funkcję po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    getWeatherConditions(City);
});
