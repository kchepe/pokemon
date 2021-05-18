import React, { useContext } from "react";
import { GlobalContext } from "../State/GlobalState";

const Footer = () => {
  const { pokemons } = useContext(GlobalContext);
  return (
    <div className="footer">
      <div>
        <p>
          Copyright © 2020 React Code Challenge. All Rights Reserved. <br />
        </p>
        {pokemons.length == 0 ? (
          ""
        ) : (
          <p>
            {" "}
            Use of Pokemon images performed under fair use. Not for sale or
            redistribution.
          </p>
        )}
      </div>
    </div>
  );
};

export default Footer;
