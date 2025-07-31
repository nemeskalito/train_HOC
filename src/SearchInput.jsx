import React, { useCallback, useContext, useRef } from "react";

import "./App.css";
const SearchInput = React.memo(({ setSearch }) => {
  const searchInput = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );
  return (
    <div>
      <input type="text" onChange={searchInput} />
    </div>
  );
});

export default SearchInput;
