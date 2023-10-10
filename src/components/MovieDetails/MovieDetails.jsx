import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movies-api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    }

    fetchMovie();
  }, [movieId]);

  const { title, poster_path, release_date, overview, genres } = movie;

  return (
    <>
      {movie ? (
        <div>
          <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />

          <h1>{title}</h1>
          <p>Release data: {release_date}</p>
          <h2>Overview </h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres &&
              genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      ) : (
        <p>Oops,smth went wrong</p>
      )}
    </>
  );
};

export default MovieDetails;
