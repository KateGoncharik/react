export const getItemImageUrl = (id: number): string => {
  const IMAGE_URL = 'https://rickandmortyapi.com/api/character/avatar/';

  if (id < 1) {
    return '';
  }

  return `${IMAGE_URL}/${id}.jpeg`;
};
