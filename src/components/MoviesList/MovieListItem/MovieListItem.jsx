const MovieListItem = ({ title, average, poster_path }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <li>
      <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
      <p>{title && title.substring(0, 20)}</p>
      <p>Average: {average.toFixed(1)}</p>
    </li>
  );
};

export default MovieListItem;
