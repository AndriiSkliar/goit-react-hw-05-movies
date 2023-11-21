import React, { useEffect, useState } from "react";
import fetchData from "components/Api/api";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { MovieMarkup } from "components/MovieMarkup/MovieMarkup";
import css from './HomePage.module.css'

const HomePage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const path = 'trending/all/day?language=en-US'

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(path);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      <MovieMarkup movieDetails={movieDetails} />
    </div>
  );
};

export default HomePage;
