 document.addEventListener('DOMContentLoaded', function () {

    const searchButton = document.querySelector('.btn');
    const searchInput = document.querySelector('.srch');
    
    if (searchButton) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission
            const query = searchInput.value.trim();
            if (query !== '') {
                alert(`Searching for: ${query}`); // Simulate a search action
            } else {
                alert('Please enter a search term.');
            }
        });
    }

    const loginButton = document.querySelector('.form .btn');
    
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
            const email = document.querySelector('input[name="email"]').value;
            const department = document.querySelector('input[name="Department"]').value;
            const name = document.querySelector('input[name="Name"]').value;
            const busNo = document.querySelector('input[name="bus no"]').value;
            const password = document.querySelector('input[name="password"]').value;
 
            if (email && department && name && busNo && password) {
                alert(`Logged in successfully!\nWelcome, ${name}`);
            } else {
                alert('Please fill in all the fields.');
            }
        });
    }
 
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = event.target.textContent.toUpperCase();
            alert(`Navigating to: ${target}`); // Simulating tab navigation
        });
    });
 
    const socialIcons = document.querySelectorAll('.icons ion-icon');
    socialIcons.forEach(function(icon) {
        icon.addEventListener('mouseenter', function() {
            icon.style.color = '#ff7200'; // Change icon color on hover
        });
        icon.addEventListener('mouseleave', function() {
            icon.style.color = '#b84949'; // Reset icon color when hover ends
        });
    });
 
    const formInputs = document.querySelectorAll('.form input');
    formInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            input.style.borderBottomColor = '#00ff0d'; // Highlight field when focused
        });
        input.addEventListener('blur', function() {
            input.style.borderBottomColor = '#ff7200'; // Reset border color when focus is lost
        });
    });
 
    const latitudeSpan = document.querySelector('#latitude');
    const longitudeSpan = document.querySelector('#longitude');
    const altitudeSpan = document.querySelector('#altitude');
    const speedSpan = document.querySelector('#speed');
    const headingSpan = document.querySelector('#heading');
 
    function updateGPSData() {
        // Simulated data for the demonstration
        latitudeSpan.textContent = '30.7333';
        longitudeSpan.textContent = '78.2170';
        altitudeSpan.textContent = '2500 meters';
        speedSpan.textContent = '60 km/h';
        headingSpan.textContent = 'North-East';
    }
 
    setInterval(updateGPSData, 5000);

});
