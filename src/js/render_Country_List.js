
export default function renderCountryList(country) {
    const countriesList = country.map((count) => {
        return `<li class="country-item">
	            <h2 class="country-name">
		            <img src=" ${count.flag}" alt="flags ${count.name}" width="35px">
		            ${count.name}
	             </h2>
            </li>`
    }).join("")
    listRef.innerHTML = countriesList;
}