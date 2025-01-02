import { createContext,  useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [subNavbar, setSubNavbar] = useState(false);
  const [token, setToken] = useState(false);

  const contextValue = {
    subNavbar,
    setSubNavbar,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
