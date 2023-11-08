import { Character } from 'src/types/types';

const baseUrl = 'https://rickandmortyapi-sigma.vercel.app/api/character';

type getCharactersProps = {
  query: string;
  page: number;
  limit: number;
};
export async function getSpecifiedCharacters({
  query = '',
  page = 1,
  limit = 10,
}: getCharactersProps): Promise<Response> {
  return await fetch(`${baseUrl}?q=${query}&_page=${page}&_limit=${limit}`);
}

export async function getCharacterById(characterId: number): Promise<Character> {
  const character = await fetch(`${baseUrl}/${characterId}`);
  return character.json();
}
