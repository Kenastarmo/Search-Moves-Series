import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Card from "../components/card"
import { BiSearch } from 'react-icons/bi';
const API = "http://www.omdbapi.com/?type=series&apikey=3c0bf875&s=";

export const Tvshows = () => {

  const [searchtvshows, setSearchtvshows] = useState("");
  const [tvshows,setTvshows] = useState([]);

  const handleSearchTvshows = (event) => {
    setSearchtvshows(event.target.value);
  }

    useEffect(() => {
      setTvshows([])
      if(searchtvshows.length >= 3){
        axios.get(API + searchtvshows)
        
          .then((response) => {
            const list = response.data.Search;
            console.log(response.data.Search)
            setTvshows(list)
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, [searchtvshows])

    const DisplayTvshows =  tvshows?.map(item => {
      return <Card key={item.imdbID} title={item.Title} poster={item.Poster}/>
    })
  
  return (
    <div className='main_container'>
        <div className='search_container'>
          <div><BiSearch /></div>
          <input type="search" value={searchtvshows} onChange={handleSearchTvshows} placeholder='Search...'></input>
        </div>
        <div className='results_container'>
          {DisplayTvshows}
        </div>
      </div>
  )
}


export default Tvshows;