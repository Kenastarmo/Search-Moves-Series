import { useEffect } from "react";
import Movies from "./pages/Movies.jsx";
// import Tvshows from "./pages/Tvshows.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MovieProvider } from "./context/context.jsx";
//naslove dodati i redom pisati

/// const App=()=>
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <BrowserRouter>
          <div className="nav">
            <NavLink className="nav-link" activeclassname="active" to="/movies">
              Movies
            </NavLink>
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/tvshows"
            >
              Tv Shows
            </NavLink>
            {/* <NavLink className="nav-link" activeclassname="active" to="/debounce">
            Tv Shows
          </NavLink> */}
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route
              exact={true}
              path="/movies"
              element={<Movies type="movie" />}
            />
            <Route path="/tvshows" element={<Movies type="series" />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
}

export default App;
