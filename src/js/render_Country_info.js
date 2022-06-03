export default function renderCountryInfo(country) {
    return `<h2 class="country-info__title">
            <img class="country-info__flag"  width = '90' src="${country.flags.svg}" alt=${country.name.common}/>
            ${country.name.common}
          </h2>
        <ul class="country-info__list">
          <li class="country-info__item">
            <span class="country-info__name">Capital: </span>${country.capital}
          </li>
          <li class="country-info__item">
            <span class="country-info__name">Population: </span>${country.population}
          </li>
          <li class="country-info__item">
            <span class="country-info__name">Languages: </span>${Object.values(country.languages).join(',')}
          </li>
        </ul>`;
};
