import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Character } from 'src/types/types';

type CharactersSetter = Dispatch<SetStateAction<Character[]>>;
type SearchQuerySetterContextProps = { children: React.ReactNode };

export const CharactersContext = createContext<Character[]>([]);
export const CharactersSetterContext = createContext<CharactersSetter>(() => {});

export const CharactersProvider = ({ children }: SearchQuerySetterContextProps) => {
  const [results, setResults] = useState<Character[]>([]);
  return (
    <CharactersContext.Provider value={results}>
      <CharactersSetterContext.Provider value={setResults}>
        {children}
      </CharactersSetterContext.Provider>
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
export const useCharactersSetter = () => useContext(CharactersSetterContext);
