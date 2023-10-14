import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/Search/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByValue } from 'services/movies-api';
import BounceLoader from 'react-spinners/ClipLoader';
import { showError, showWarning } from 'services/notification';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    const searchValue = searchParams.get('query');
    if (!searchValue) return;
    setSearchValue(searchValue);
  }, [searchParams]);

  useEffect(() => {
    if (!searchValue) return;
    setLoader(true);
    async function fetchMoviesByValue() {
      const response = await searchMoviesByValue(searchValue, page);
      setLoader(false);
      if (!response.total_results) {
        return showError(
          'Ooops, sorry, we didn`t find movies. Write correct name.'
        );
      }
      const { results, total_pages } = response;

      setTotalPages(total_pages);
      if (page === 1) {
        setMovies(results);
      } else {
        setMovies(state => [...state, ...results]);
      }
    }
    fetchMoviesByValue();
  }, [searchValue, page]);

  const handleSubmit = value => {
    const query = value !== '' ? { query: value } : {};
    setSearchParams(query);
    setSearchValue(value);
    setPage(1);
    setMovies([]);
  };

  const incrementPage = () => {
    if (page >= totalPages) return showWarning('You get the end!');
    setPage(state => state + 1);
  };

  return (
    <>
      <main>
        <section>
          <SearchBox onSubmit={handleSubmit} />
          <BounceLoader
            className="loader"
            loading={loader}
            color={'#751975'}
            size={80}
          />
          {movies && <MoviesList movies={movies} nextPage={incrementPage} />}
        </section>
      </main>
    </>
  );
};

export default Movies;
