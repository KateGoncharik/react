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
  pageChangeHandler: (number: number) => void;
  currentPage: number;
  maxPageCount: number;
};

export type ItemProps = {
  character: Character;
};
