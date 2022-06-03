export default function renderCountryList(country) {
  return `<li class="country-list__item">
            <img src = '${country.flags.svg}' class='country-flag' width = '60' alt=${country.name.common}>
            <h2 class="country-name">
              ${country.name.common}
            </h2>
          </li>`;
}
