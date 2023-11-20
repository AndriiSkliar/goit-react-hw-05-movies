import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetchData from "components/Api/api";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { MovieMarkup } from "components/MovieMarkup/MovieMarkup";
import { MoviesSearchForm } from "components/Form/Form";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get('query');

  useEffect(() => {
    const path = `search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(path);
        setMovieDetails(data);
        const dataFilms = JSON.stringify(data.results);
        localStorage.setItem("films", dataFilms);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSearchedMovies();
    }
  }, [query]);

  const handleFormSubmit = (values) => {
    setSearchParams({ query: values.query });
  };

  return (
    <>
      <MoviesSearchForm handleFormSubmit={handleFormSubmit} />
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      <MovieMarkup movieDetails={movieDetails} />
    </>
  );
};

export default Movies;
