import { createContext } from "react";
import { useNavigate } from "react-router-dom";

type AppContextType = {
  navigate: ReturnType<typeof useNavigate>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = (props: AppContextProviderProps) => {
  const navigate = useNavigate();

  const value = {
    navigate,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
