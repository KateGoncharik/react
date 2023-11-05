export type Character = {
  name: string;
  url: string;
};
export type ResultsState = {
  characters: { results: Array<Character> } | null;
};

export type ResultsProps = {
  characters: Array<Character>;
};

export type ItemState = {
  characterName: string;
  characterUrl: string;
};
