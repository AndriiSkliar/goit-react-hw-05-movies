import { Link, useLocation } from "react-router-dom"
import css from './MovieMarkup.module.css'

export const MovieMarkup = ({ movieDetails }) => {
  const location = useLocation();
  const defaultImg = "https://kartinkof.club/uploads/posts/2022-04/1649989581_17-kartinkof-club-p-koshechki-kartinki-prikolnie-17.jpg";

  return (
    <ul className={css.gallery}>
      {movieDetails !== null && movieDetails.results.map(({ title, id, name, poster_path }) => (
        <li key={id} className={css.galleryItem}>
          <Link state={{from: location}} to={`/movies/${id}`}>
            <img className={css.galleryImage} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title ? title : name} width="150" />
            <h2 className={css.galleryTitle}>{title ? title : name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}
