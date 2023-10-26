const baseUrl = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const results = await fetch(`
  ${baseUrl}/character`)
    .then((res) => res.json())
    .then((data) => data);
  return results;
}

export async function getSpecifiedCharacters(query: string) {
  const results = await fetch(`${baseUrl}/character/?name=${query}`)
    .then((res) => res.json())
    .then((data) => data);
  return results;
}
