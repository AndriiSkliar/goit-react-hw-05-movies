import React from "react";
import css from './CardOfFilm.module.css'

export const CardOfFilm = ({ film }) => {
  const { backdrop_path, name, overview, title, vote_average } = film;
  const defaultImg = "https://kartinkof.club/uploads/posts/2022-04/1649989578_8-kartinkof-club-p-koshechki-kartinki-prikolnie-8.jpg";

  return (
    <div className={css.cardWrapper}>
      <div>
        <img className={css.cardImg} src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : defaultImg}
          alt={title ? title : name}
          width="250" />
      </div>
      <div className={css.cardInfo}>
        <h2>{title ? title : name}</h2>
        <p>vote average: {vote_average}</p>
        <p>overview:</p>
        <code>{overview}</code>
      </div>
    </div>
  );
};


