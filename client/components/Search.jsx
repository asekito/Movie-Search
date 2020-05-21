import React from "react";

const Search = () => {
  const searchMovies = async (e) => {
    e.preventDefault();
    const query = "Superman";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=KEYHERE&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
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
