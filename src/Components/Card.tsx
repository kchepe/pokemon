import React, { useContext, useState } from "react";
import { GlobalContext } from "../State/GlobalState";

const Card = () => {
  const { pokemons, filterText } = useContext(GlobalContext);
  return (
    <div className={"cardContainer"}>
      {pokemons
        .filter((value: any) => {
          if (filterText === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(filterText.toLowerCase())
          ) {
            return value;
          }
        })
        .map((pokemon: any, index: number) => (
          <div className={"pokemonCard"} key={index}>
            <div className={"cardContent"}>
              <div>
                <img src={pokemon.image.url} width={180} />
              </div>
              <div>
                <span>#{pokemon.number.toString().padStart(3, "0")}</span>
              </div>
              <div>
                {" "}
                <span>{pokemon.name}</span>
              </div>
              <div className={"typeContainer"}>
                {pokemon.types.map((type: any, i: number) => (
                  <div
                    key={i}
                    className={"type"}
                    style={{
                      background:
                        type === "Poison"
                          ? "#c27ebc"
                          : type === "Grass"
                          ? "#83c27e"
                          : type === "Fire"
                          ? "#fd8900"
                          : type === "Water"
                          ? "#051bd9"
                          : "#99b100",
                    }}
                  >
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
