import { Character } from '@/types/types';

import { BASE_URL } from '@/lib/config';
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
  return await fetch(`${BASE_URL}?q=${query}&_page=${page}&_limit=${limit}`);
}

export async function getCharacterById(characterId: number): Promise<Character> {
  const character = await fetch(`${BASE_URL}/${characterId}`);
  return character.json();
}
