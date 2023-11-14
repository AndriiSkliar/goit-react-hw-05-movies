import { HomePage } from "pages/HomePage";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Routes, Route, NavLink } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};
