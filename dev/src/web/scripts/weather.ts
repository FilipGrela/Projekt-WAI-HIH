const API_KEY = '3d31e194e08946cf884200450242210';  // Wprowadź swój klucz API AccuWeather
const City = 'Warszawa';  // Wprowadź klucz lokalizacji (np. Warszawa)

async function getWeatherConditions(locationKey: string, weatherInfoDiv:Element|null) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationKey}&aqi=no`;
    let weather;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Błąd w pobieraniu danych');
        }

        weather = await response.json();

        if (weatherInfoDiv) {
            weatherInfoDiv.append(getWeatherFragment(weather));
        }
    } catch (error) {
        console.error('Błąd:', error);
        return null;
    }
    return weather;
}

function getWeatherFragment(weather:any):DocumentFragment {
    const fragment = new DocumentFragment();
    console.log(weather.type);

    const weather_current = weather['current'];
    const weather_city = weather['location'];

    const p_cityName:HTMLHeadElement = document.createElement("h1");
    const p_temperature:HTMLParagraphElement = document.createElement("p");
    const p_conditions:HTMLParagraphElement = document.createElement("p");
    const p_icon:HTMLImageElement = document.createElement("img");
    const p_wind:HTMLParagraphElement = document.createElement("p");
    const p_humidity:HTMLParagraphElement = document.createElement("p");

    const br:HTMLHRElement = document.createElement("hr");


    p_cityName.textContent = weather_city.name;
    p_temperature.textContent = 'Temperatura: ' + weather_current.temp_c + '°C';
    p_conditions.textContent = 'Warunki: ' +weather_current.condition.text;
    p_icon.src = weather_current.condition.icon;
    p_icon.alt = '';
    p_wind.textContent = 'Wiatr: '+weather_current.wind_kph+'km/h';
    p_humidity.textContent = 'Wilgotnosc: ' + weather_current.humidity + '%';

    fragment.append(br);
    fragment.append(p_cityName);
    fragment.append(p_temperature);
    fragment.append(p_conditions);
    fragment.append(p_icon);
    fragment.append(p_wind);
    fragment.append(p_humidity);

    return fragment;
}




// Uruchom funkcję po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {


    const weatherInfoDiv = document.getElementsByClassName('weather-info');

    for (let i = 0; i < weatherInfoDiv.length; i++) {
        let city_name:string = weatherInfoDiv[i].id;
        getWeatherConditions(city_name, weatherInfoDiv[i]);
    }
});
