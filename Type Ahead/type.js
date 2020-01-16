const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    //se usa el constructor regex por que es necesario usarlo de forma funcional
    const regex = new RegExp(wordToMatch, 'gi')// es igual a /wordToMatch/gi; 
    return place.city.match(regex) || place.state.match(regex);
});
}

const numberWhitCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const displayMatches = (e) => {
    // console.log(e.target.value);
    const matchArr = findMatches(e.target.value, cities);
    const html = matchArr.map(place => {
      const regex = new RegExp(e.target.value, 'gi');      
      const cityName = place.city.replace(regex, `<span class = 'hl'>${e.target.value}</span>`);
      const stateName = place.state.replace(regex, `<span class = 'hl'>${e.target.value}</span>`);

      return `
        <li>
          <span class = 'name'>${cityName}, ${stateName}</span>
          <span class = 'population'>${numberWhitCommas(place.population)}</span>
        </li>
      ` 
    }).join('');
    suggestions.innerHTML = html;   
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
   