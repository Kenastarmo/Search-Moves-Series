import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Card from "../components/card"
import { BiSearch } from 'react-icons/bi';
const API = "http://www.omdbapi.com/?type=movie&apikey=3c0bf875&s=";

export const Movies = () => {

  const [search, setSearch] = useState("");
  const [Movies,setMovies] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

    useEffect(() => {
      setMovies([])
      if(search.length >= 3){
        axios.get(API + search)
        
          .then((response) => {
            const list = response.data.Search;
            console.log(response.data.Search)
           setMovies(list)
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, [search])

    const DisplayMovies =  Movies?.map(item => {
      return <Card key={item.imdbID} title={item.Title} poster={item.Poster}/>
    })
  


  return (
    <div className='main_container'>
        {/* <Search /> */}
        <div className='search_container'>
          <div><BiSearch /></div>
          <input type="search" value={search} onChange={handleSearch} placeholder='Search...'></input>
        </div>
        <div className='results_container'>
          {DisplayMovies}

        </div>
      </div>
  )
}


export default Movies;