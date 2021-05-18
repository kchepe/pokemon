import React, { useContext } from "react";
import { GlobalContext } from "../State/GlobalState";

const FilterBox = () => {
  const { handleChange, filterText } = useContext(GlobalContext);

  return (
    <div className={"filterBox"}>
      <input
        type="text"
        value={filterText}
        className={"txtField"}
        placeholder={"Search here"}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterBox;
