// FilterContext.js
import { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [timeFilter, setTimeFilter] = useState("week");
  console.log(timeFilter);

  return (
    <FilterContext.Provider value={{ timeFilter, setTimeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
