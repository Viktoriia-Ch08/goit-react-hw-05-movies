import { Link, useLocation } from 'react-router-dom';
import { StyledMoviesList } from './MoviesList.styled';
import MovieListItem from './MovieListItem/MovieListItem';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMoviesList>
      {movies &&
        movies.map(({ id, title, vote_average, poster_path }) => {
          return (
            <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
              <MovieListItem
                id={id}
                title={title}
                average={vote_average}
                poster_path={poster_path}
              />
            </Link>
          );
        })}
    </StyledMoviesList>
  );
};

export default MoviesList;
