import { useLocation } from 'react-router-dom';
import { LinkToMovieDetails, StyledMoviesList } from './MoviesList.styled';
import MovieListItem from './MovieListItem/MovieListItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const MoviesList = ({ movies, nextPage }) => {
  const location = useLocation();

  return (
    <>
      <StyledMoviesList>
        {movies &&
          movies.map(({ id, title, vote_average, poster_path }) => {
            return (
              <LinkToMovieDetails
                to={`/movies/${id}`}
                key={id}
                state={{ from: location }}
              >
                <MovieListItem
                  id={id}
                  title={title}
                  average={vote_average}
                  poster_path={poster_path}
                />
              </LinkToMovieDetails>
            );
          })}
      </StyledMoviesList>
      {nextPage && (
        <InfiniteScroll
          dataLength={movies.length}
          next={nextPage}
          hasMore={true}
          scrollThreshold={0.9}
        />
      )}
    </>
  );
};

export default MoviesList;
