const searchinput = document.querySelector("#searchinput");
const searchbtn = document.querySelector("#btn");
const card = document.querySelector(".card");
const list = document.getElementById('list');

let allCountriesData;

const getCountry = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");

        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        const data = await res.json();
        allCountriesData = data;
        console.log(data);
        displayCountry(data);
    } catch (error) {
        console.log(error);
    }
};

const displayCountry = (countries) => {
    
list.innerHTML = ""

    countries.forEach((country) => {
        const {
            flags,
            name,
            region,
            capital,
            languages,
            borders,
            currencies,
            maps,
            population,
        } = country;

        const countryName = name.common;

        card.innerHTML = `
        <ul class="list-group list-group-flush" id="list">
        <li class="list-group-item"style="font-size: 25px;">${countryName}</li>
        <li class="list-group-item"><img src="${flags.png}" alt="" class="img-fluid" ></li>
        <li class="list-group-item">Region: ${region}</li>
        <li class="list-group-item">Capitals: ${capital}</li>
        <li class="list-group-item">Languages: ${Object.keys(languages)}</li>
        <li class="list-group-item">Borders: ${borders} </li>
        <li class="list-group-item">Currencies: ${Object.keys(currencies)} </li>
        <li class="list-group-item">Population: ${population}  </li>

        <li class="list-group-item">
        <a href="${maps.googleMaps}" target="_blank">Go to the google map</a>
        </li>
        </ul>`;
        

       
    });
};

const searchCountry = (Term) => {
    const filteredCountries = allCountriesData.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.includes(Term);
    });
    
    displayCountry(filteredCountries);
};

searchinput.addEventListener('input', () => {
    const Term = searchinput.value.trim().toLowerCase();
    searchCountry(Term);
});

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const Term = searchinput.value.trim().toLowerCase();
    searchCountry(Term);
});
window.addEventListener("load", () => {
    getCountry();
  })

getCountry();