import { createContext, useContext, useState } from "react";

const SearchGoalContext = createContext(undefined);

export const SearchGoalProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <SearchGoalContext.Provider
      value={{ searchWord, handleSearch: (e) => setSearchWord(e) }}
    >
      {children}
    </SearchGoalContext.Provider>
  );
};

export const useSearchGoal = () => useContext(SearchGoalContext);
