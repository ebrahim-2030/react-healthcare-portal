import { createContext } from "react";

// get doctors data from the assets file
import { doctors } from "../assets/assets";

// create state for app context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // context value with doctors data
  const value = { doctors };
  return (
    // wrap children with AppContext.Provider to pass down value
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
