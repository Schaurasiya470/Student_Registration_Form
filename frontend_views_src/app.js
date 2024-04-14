const nextbtn1 = document.getElementById('nextbtn1');
const nextbtn2 = document.getElementById('nextbtn2');
const nextbtn3 = document.getElementById('nextbtn3');
const backbtn1 = document.getElementById('backbtn1');
const backbtn2 = document.getElementById('backbtn2');

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nobtn = document.getElementById('nobtn');
const yesbtn = document.getElementById('yesbtn');
const file = document.getElementById('file');


nav1.style.backgroundColor = "rgb(47, 137, 47)";
nobtn.addEventListener('click',()=>{
    file.style.display="None";

});

yesbtn.addEventListener('click',()=>{
    file.style.display="block";
 
 });

nextbtn1.addEventListener('click',()=>{
    form2.style.top="-550px";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "rgb(47, 137, 47)";

});

nextbtn2.addEventListener('click',()=>{
    form3.style.top="-1100px";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "rgb(47, 137, 47)";

});

backbtn1.addEventListener('click',()=>{
    form2.style.top="550px";
    form3.style.top="1100px";
    nav1.style.backgroundColor = "rgb(47, 137, 47)";
    nav2.style.backgroundColor = "white";

});

// nextbtn3.addEventListener('click',()=>{
//     form3.style.top="-500px";

// });

backbtn2.addEventListener('click',()=>{
    // form2.style.top="500px";
    form3.style.top="1100px";
    nav2.style.backgroundColor = "rgb(47, 137, 47)";
    nav3.style.backgroundColor = "white";

});


var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}
var countrySelect = document.querySelector('.country'),
    stateSelect = document.querySelector('.state'),
    citySelect = document.querySelector('.city')

function loadCountries() {

    let apiEndPoint = config.cUrl

    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(Response => Response.json())
    .then(data => {
            data.forEach(country => {
            const option = document.createElement('option')
            option.value = country.iso2
            option.textContent = country.name 
            countrySelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading countries:', error))

    stateSelect.disabled = true
    citySelect.disabled = true
    stateSelect.style.pointerEvents = 'none'
    citySelect.style.pointerEvents = 'none'
}


function loadStates() {
    stateSelect.disabled = false
    citySelect.disabled = true
    stateSelect.style.pointerEvents = 'auto'
    citySelect.style.pointerEvents = 'none'

    const selectedCountryCode = countrySelect.value
    stateSelect.innerHTML = '<option value="">Select State</option>'
    citySelect.innerHTML = '<option value="">Select City</option>'

    fetch(`${config.cUrl}/${selectedCountryCode}/states`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(response => response.json())
    .then(data => {
        data.forEach(state => {
            const option = document.createElement('option')
            option.value = state.iso2
            option.textContent = state.name 
            stateSelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading countries:', error))
}


function loadCities() {
    citySelect.disabled = false
    citySelect.style.pointerEvents = 'auto'

    const selectedCountryCode = countrySelect.value
    const selectedStateCode = stateSelect.value
    citySelect.innerHTML = '<option value="">Select City</option>' 
    fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(response => response.json())
    .then(data => {
        data.forEach(city => {
            const option = document.createElement('option')
            option.value = city.iso2
            option.textContent = city.name 
            citySelect.appendChild(option)
        })
    })
}

window.onload = loadCountries

