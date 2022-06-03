import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountry from './js/fetchCountries'
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import renderCountryInfo from './js/render_Country_info';
// import renderCountryList from './js/render_Country_List';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const containerRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onFetchCountry, DEBOUNCE_DELAY));

function onFetchCountry(event) {
  event.preventDefault();

  const valueInput = event.target.value.trim();
  listRef.innerHTML = '';
  containerRef.innerHTML = '';

  fetchCountry(valueInput)
    .then(response => {
      console.log(response);
      if (response.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
      } else if (response.length >= 2 && response.length <= 10) {
        renderCountryList(response);
      } else if (response.length === 1) {
        renderCountryInfo(response);
      }
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
};

function renderCountryList(country) {
  const countriesList = country.map((count) => {
    return `<li class="country-item">
	            <h2 class="country-name">
		            <img src=" ${count.flag.svg}" alt="flags ${count.name}" width="35px">
		            ${count.name}
	             </h2>
            </li>`
  }).join("")
  listRef.innerHTML = countriesList;
}

function renderCountryInfo(country) {

  const countriesList = country.map((count) => {
    return `<li class="country-item">
	            <h2 class="country-name">
		            <img src=" ${count.flag}" alt="flags ${count.name}" width="35px">
		            ${count.name}
	             </h2>
            </li>`
  }).join("")


  const countriesInfo = country.map((count) => {
    return `<ul class="country-info__list">
              <li class="country-info__item" > <b>Capital:</b>  ${count.capital} </li>
              <li  class="country-info__item"> <b>Population:</b>  ${count.population} </li>
              <li class="country-info__item" > <b>Languages:</b>  ${count.languages} </li>
            </ul>`
  });
  containerRef.innerHTML = countriesInfo;
  listRef.innerHTML = countriesList;
}