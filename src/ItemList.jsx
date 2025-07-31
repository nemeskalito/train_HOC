import React, { useContext, useMemo } from "react";

import "./App.css";

const ItemList = ({ array, search }) => {
  const filterItems = useMemo(() => {
    if (!search) return [];
    return array.filter((item) => item.includes(search));
  }, [array, search]);
  return (
    <ul className="list">
      {filterItems.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ItemList;
