document.getElementById('search-button').addEventListener('click', function() {
    // Get the entered location from the input field
    const locationInput = document.getElementById('location-input').value;
    
    // Set the location name in the weather-info div
    document.getElementById('location-name').innerText = locationInput;
    
    // Placeholder data for temperature and condition
    const temperature = "25°C"; // Example temperature
    const condition = "Sunny"; // Example condition
    
    // Set the placeholder temperature and condition in the weather-info div
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('condition').innerText = condition;
    
    // Clear the input field
    document.getElementById('location-input').value = '';
});
