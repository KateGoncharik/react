export type Character = {
  name: string;
  url: string;
};

export type ResultsProps = {
  characters: Array<Character>;
};

export type ItemProps = {
  characterName: string;
  characterUrl: string;
};
