import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import fetchData from "components/Api/api";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { CardOfFilm } from "components/CardOfFilm/CardOfFilm";
import css from './MovieDetails.module.css'

const Cast = lazy(() => import("pages/Cast/Cast"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const path = `movie/${movieId}`;

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(path);
        setFilm(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      <div className={css.backLinkWrapper}>
        <Link className={css.backLink} to={backLinkRef.current}>👈 Go back</Link>
      </div>
      {film !== null && <CardOfFilm film={film} />}
      <div className={css.backLinkWrapper}>
        <NavLink className={css.backLink} to="cast">Cast</NavLink>
        <NavLink className={css.backLink} to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
