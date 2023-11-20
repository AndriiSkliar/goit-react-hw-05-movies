export const getFilmById = (movieId, films) => {
  return films.find(film => film.id === movieId);
};
