import React from "react";

const Search = () => {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        name="query"
        placeholder="Search For A Movie"
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
