import Movies from "./pages/Movies.jsx"
import Tvshows from "./pages/Tvshows.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom";


function App() {

  
    return (
    <div className="App">
        <BrowserRouter>

          <div className="nav">
            {/* <Link to="/" className="btn">Movies</Link> */}
            <NavLink className="nav-link" activeclassname="active" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" activeclassname="active" to="/tvshows">Tv Shows</NavLink>
            {/* <Link to="/tvshows" className="btn">Tv Shows</Link> */}
          </div>

        <Routes>
          <Route path="/movies" element={<Movies /> } />
            {/* <Route path="/movies" element={<Movies />} /> */}
          <Route path="/tvshows" element={<Tvshows />} />
          
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
