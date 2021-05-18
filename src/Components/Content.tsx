import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../State/GlobalState";
import Card from "../Components/Card";
import FilterBox from "./FilterBox";

const Content = () => {
  const { pokemons, errMsg, isLoading } = useContext(GlobalContext);

  return (
    <div className={"content"}>
      <FilterBox />
      <Card />
      <div className={"msg"}>
        <h1>{errMsg}</h1>
      </div>
      {isLoading && (
        <div className={"msg"}>
          <h1>Catching them all..</h1>
        </div>
      )}
    </div>
  );
};

export default Content;
