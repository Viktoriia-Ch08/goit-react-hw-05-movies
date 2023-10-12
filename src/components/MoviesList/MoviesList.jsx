import { Link, useLocation } from 'react-router-dom';
import { StyledMoviesList } from './MoviesList.styled';
import MovieListItem from './MovieListItem/MovieListItem';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { ClipLoader } from 'react-spinners';

const MoviesList = ({ movies, nextPage }) => {
  const location = useLocation();

  return (
    <>
      <StyledMoviesList>
        {movies &&
          movies.map(({ id, title, vote_average, poster_path }) => {
            return (
              <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
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
      {nextPage && (
        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={nextPage}
          hasMore={true}
          scrollThreshold={0.9}
        />
      )}
    </>
  );
};

export default MoviesList;
