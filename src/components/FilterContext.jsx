import { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [timeFilter, setTimeFilter] = useState("week");

  return (
    <FilterContext.Provider value={{ timeFilter, setTimeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
