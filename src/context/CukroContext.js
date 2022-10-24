import { createContext, useContext, useState } from "react";

const CukroContext = createContext();

export const useOrder = () => {
  return useContext(CukroContext);
};

export const CukroProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  return <CukroContext.Provider value={{ order, setOrder }}>{children}</CukroContext.Provider>;
};
