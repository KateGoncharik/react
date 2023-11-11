import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Character } from 'src/types/types';

type ResultsSetter = Dispatch<SetStateAction<Character[] | null>>;
type SearchQuerySetterContextProps = { children: React.ReactNode };

export const CharactersContext = createContext<Character[] | null>(null);
export const CharactersSetterContext = createContext<ResultsSetter>(() => {});

export const CharactersProvider = ({ children }: SearchQuerySetterContextProps) => {
  const [results, setResults] = useState<Character[] | null>(null);
  return (
    <CharactersContext.Provider value={results}>
      <CharactersSetterContext.Provider value={setResults}>
        {children}
      </CharactersSetterContext.Provider>
    </CharactersContext.Provider>
  );
};

export const useResults = () => useContext(CharactersContext);
export const useResultsSetter = () => useContext(CharactersSetterContext);
