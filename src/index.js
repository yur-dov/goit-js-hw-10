import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries';
import renderCountryList from './js/render_Country_List';
import renderCountryInfo from './js/render_Country_info';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  event.preventDefault();
  const value = event.target.value.trim();
  refs.countryList.innerHTML = '';
  if (value !== '') {
    MurkupList(value);
  }
};

function MurkupList(country) {
  fetchCountries(country).then(countries => {
    if (countries.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
    }
    if (countries.length > 1 && countries.length <= 10) {
      const murkupList = countries.map(renderCountryList).join('');
      refs.countryList.insertAdjacentHTML('beforeend', murkupList);
    }
    if (countries.length === 1) {
      const murkupInfo = countries.map(renderCountryInfo).join('');
      refs.countryList.insertAdjacentHTML('beforeend', murkupInfo);
    }
  }).catch(error => {
    Notify.failure('Oops, there is no country with that name');
  })
};