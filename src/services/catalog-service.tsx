import type Character from '@/types/types';

const baseUrl = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  return await fetch(`
  ${baseUrl}/character`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getSpecifiedCharacters(query: string): Promise<Character[] | null> {
  return await fetch(`${baseUrl}/character/?name=${query}`)
    .then((res) => res.json())
    .then((data) => data);
}
