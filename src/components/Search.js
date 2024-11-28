import React from "react";

const Search = ({ input, setInput, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
