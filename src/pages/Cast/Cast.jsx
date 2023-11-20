import fetchData from "components/Api/api";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Cast.module.css'

const Cast = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { movieId } = useParams();
  const defaultImg = "https://kartinkof.club/uploads/posts/2022-04/1649989581_17-kartinkof-club-p-koshechki-kartinki-prikolnie-17.jpg";

  useEffect(() => {
    if (movieDetails !== null) return;
    const path = `movie/${movieId}/credits`

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
    <div>
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      <ul className={css.gallery}>
        {movieDetails !== null && movieDetails.cast.map(({ cast_id, name, profile_path, id }) => (
          <li className={css.galleryItem} key={id}>
            <img
              className={css.galleryImage}
              src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg}
              alt={name}
              width="150"
            />
            <h2 className={css.galleryTitle}>{name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
