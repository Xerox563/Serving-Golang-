import { useState } from "react";

const SearchBar = () => {
  const [txt, settxt] = useState("null");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={txt}
          onChange={(e) => settxt(e.target.value)}
        />
        <button>Search - {txt}</button>
      </div>
    </>
  );
};

export default SearchBar;
