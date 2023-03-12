import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from "./components/search"
import Card from "./components/card"
import Results from "./components/results"
import { BiSearch } from 'react-icons/bi';
const API = "http://www.omdbapi.com/?apikey=3c0bf875&s=";


function App() {

  const [search, setSearch] = useState("");
  const [movies,setMovies] = useState([]);

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

    const displayMovies =  movies?.map(item => {
      return <Card key={item.imdbID} title={item.Title} poster={item.Poster}/>
    })
  
    return (
    <div className="App">
      <div className='main_container'>
        {/* <Search /> */}
        <div className='search_container'>
          <div><BiSearch /></div>
          <input type="search" value={search} onChange={handleSearch} placeholder='Search...'></input>
        </div>
        <div className='results_container'>
          {displayMovies}

        </div>
      </div>
    </div>
  );
}

export default App;
