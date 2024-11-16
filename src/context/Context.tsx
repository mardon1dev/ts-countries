import React, { createContext, useState, ReactNode } from "react";
import { CountryType } from "../pages/Home";

interface ContextType {
  countries: CountryType[];
  setCountries: React.Dispatch<React.SetStateAction<CountryType[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType>({
  countries: [],
  setCountries: () => [],
  search: "",
  setSearch: () => "",
  refresh: false,
  setRefresh: () => false,
});

interface CountryContextProps {
  children: ReactNode;
}

export const CountryContext: React.FC<CountryContextProps> = ({ children }) => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        search,
        setSearch,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </Context.Provider>
  );
};
