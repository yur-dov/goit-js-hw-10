export default function renderCountryInfo(country) {

    const countriesList = country.map((count) => {
        return `<li class="country-item">
	            <h2 class="country-name">
		            <img src=" ${count.flag}" alt="flags ${count.name}" width="35px">
		            ${count.name}
	             </h2>
            </li>`
    }).join("")
    listRef.innerHTML = countriesList;

    const countriesInfo = country.map((count) => {
        return `<ul class="country-info__list">
              <li class="country-info__item" > <b>Capital:</b>  ${count.capital} </li>
              <li  class="country-info__item"> <b>Population:</b>  ${count.population}</li>
              <li class="country-info__item" > <b>Languages:</b>  ${count.languages} </li>
            </ul>`
    });

    listRef.innerHTML = countriesList;
    containerRef.innerHTML = countriesInfo;
}
