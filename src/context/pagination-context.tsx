import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

type PaginationSetter = Dispatch<SetStateAction<number>>;
type SearchQuerySetterContextProps = { children: React.ReactNode };

export const PaginationContext = createContext(1);
export const PaginationSetterContext = createContext<PaginationSetter>(() => {});

export const PaginationProvider = ({ children }: SearchQuerySetterContextProps) => {
  const [pagination, setPagination] = useState(1);
  return (
    <PaginationContext.Provider value={pagination}>
      <PaginationSetterContext.Provider value={setPagination}>
        {children}
      </PaginationSetterContext.Provider>
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);
export const usePaginationSetter = () => useContext(PaginationSetterContext);
