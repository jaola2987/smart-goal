import { createContext, useContext, useState } from "react";

const SortGoalsContext = createContext(undefined);

export const SortGoalsProvider = ({ children }) => {
  const [sortType, setSortType] = useState([
    { id: "creationTime", title: "Date", increment: true },
    { id: "title", title: "Alphabet", increment: true },
    { id: "completedOn", title: "% of completion", increment: true },
  ]);

  return (
    <SortGoalsContext.Provider
      value={{
        sortType,
        toggleTheme: (shoosedEl) => {
          const stablePart = sortType.map((el) => {
            if (el.title === shoosedEl.title) {
              el.increment = !shoosedEl.increment;
            }
            return el;
          });
          setSortType([...stablePart]);
        },
      }}
    >
      {children}
    </SortGoalsContext.Provider>
  );
};

export const useSortGoals = () => useContext(SortGoalsContext);
