const baseUrl = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const results = await 
  fetch(`
  ${baseUrl}/character`)
  .then((res) => res.json())
  .then((data) => data);
  return results;
}

