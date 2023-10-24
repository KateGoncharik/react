export function fetchData() {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) => res.json())
    .then((fetchedData) => fetchedData);
}
