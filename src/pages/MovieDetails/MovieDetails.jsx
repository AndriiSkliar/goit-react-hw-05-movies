import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getFilmById } from 'pages/getFilmById'
import { CardOfFilm } from "components/CardOfFilm/CardOfFilm";
import { lazy, useRef } from "react";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";
import css from './MovieDetails.module.css'
const Cast = lazy(() => import("pages/Cast/Cast"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));

const MovieDetails = () => {
  const { movieId } = useParams();
  const dataFilms = localStorage.getItem("films");
  const films = JSON.parse(dataFilms);
  const film = getFilmById(Number(movieId), films);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <div className={css.backLinckWrapper}>
        <Link className={css.backLinck} to={backLinkRef.current}>👈 Go back</Link>
      </div>
      <CardOfFilm film={film} />
      <div className={css.backLinckWrapper}>
        <NavLink className={css.backLinck} to="cast">Cast</NavLink>
        <NavLink className={css.backLinck} to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
