import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext<any>(null);

export const GlobalProvider = (props: any) => {
  const [pokemons, setPokemon] = useState([]);
  const url: string = "https://api.jsonbin.io/b/60a36ea0ad11ea05fe549362";
  const [errMsg, setMsg] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    getPokemon().catch(() => {
      console.log("No data fetch");
      setMsg("Something went wrong. We weren't able to find any pokemon");
      setIsloading(false);
    });
  }, []);

  const getPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data.entries);
    setIsloading(false);
  };

  const handleChange = (e: any) => {
    setFilterText(e.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{ pokemons, errMsg, isLoading, handleChange, filterText }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
