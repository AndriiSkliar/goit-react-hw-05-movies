import fetchData from "components/Api/api";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css'

const Reviews = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieDetails !== null) return;
    const path = `movie/${movieId}/reviews`;

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
  }, [movieId, movieDetails]);

  return (
    <div className={css.reviewsWrapper}>
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      {movieDetails !== null && movieDetails.results.length > 0 ? (
        <ul className={css.reviewsList}>
          {movieDetails.results.map(({ author, id, content }) => (
            <li key={id}>
              <p className={css.reviewsParagraph}>{author}</p>
              <code>{content}</code>
            </li>
          ))}
        </ul>
      ) : (
        movieDetails !== null && (
          <p className={css.noReviews}>We don't have any reviews for this movie.</p>
        )
      )}
    </div>
  );
};

export default Reviews;
