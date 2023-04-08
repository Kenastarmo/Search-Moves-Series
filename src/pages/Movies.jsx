import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
import "../App.css";
import Card from "../components/card";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";
import { serviceapi } from "../service/serviceapi";
//Naslovi

import { globalContext } from "../context/context";

export const Movies = ({ type }) => {
  const context = useContext(globalContext);

  // const API = `http://www.omdbapi.com/?type=${type}&apikey=3c0bf875&s=`;
  //State
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  const [Movies, setMovies] = useState([]);

  //Handlers
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setMovies([]);
    if (value.length >= 3) {
      // serviceapi(value, type)
      //   .then((data) => {
      //     console.log(data);
      //     setMovies(data);
      //   })
      //   .catch((error) => console.log(error));
      context.fetchMoviesSeries(value, type);
      setMovies(context.movies_series.data.Search);
    }
  }, [value]);

  return (
    <div className="main_container">
      {/* <Search /> */}

      <div className="search_container">
        <div>
          <BiSearch />
        </div>
        {/* <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        ></input> */}

        <input onChange={handleSearch} placeholder="Search..." />
      </div>

      <div className="results_container">
        {Movies?.map((item) => {
          return (
            <Card key={item.imdbID} title={item.Title} poster={item.Poster} />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
