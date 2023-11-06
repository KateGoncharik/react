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
  const response = await fetch(`${baseUrl}?q=${query}&_page=${page}&_limit=${limit}`);
  return response;
}
