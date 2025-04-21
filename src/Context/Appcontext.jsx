import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </AppContext.Provider>
  );
};
