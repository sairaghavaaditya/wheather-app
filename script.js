document.getElementById('search-button').addEventListener('click', function() {
    const locationInput = document.getElementById('location-input').value;

    if (locationInput === '') {
        alert('Please enter a location');
        return;
    }

    const apiKey = '01e027df33fd7453ecee8bd989ed4005';  // Replace 'YOUR_API_KEY' with your actual OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            const locationName = data.name;
            const temperature = data.main.temp;
            const condition = data.weather[0].description;

            document.getElementById('location-name').innerText = locationName;
            document.getElementById('temperature').innerText = `${temperature}°C`;
            document.getElementById('condition').innerText = condition;

            document.getElementById('location-input').value = '';
        })
        .catch(error => {
            alert(error.message);
        });
});
