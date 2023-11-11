export type Character = {
  created: string;
  gender: string;
  id: number;
  location: string;
  name: string;
  origin: string;
  species: string;
  status: string;
  type: string;
};

export type ResultsProps = {
  characters: Array<Character>;
  paginationNextHandler: () => void;
  paginationPrevHandler: () => void;
};

export type ItemProps = {
  character: Character;
};
