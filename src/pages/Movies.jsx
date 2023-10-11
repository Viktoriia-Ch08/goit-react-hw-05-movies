import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/Search/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByValue } from 'services/movies-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function handleSearchData() {
      const data = searchParams.get('query');
      const moviesForList = await searchMoviesByValue(data);
      setMovies(moviesForList.results);
    }

    handleSearchData();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <main>
      <SearchBox onChange={updateQueryString} onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
