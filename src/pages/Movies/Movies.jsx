import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/Search/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByValue } from 'services/movies-api';
import BounceLoader from 'react-spinners/BounceLoader';
import { showError, showWarning } from 'services/notification';
import { Wrapper } from './Movies.styled';

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

    async function fetchMoviesByValue() {
      try {
        setLoader(true);
        const response = await searchMoviesByValue(searchValue, page);
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
      } catch (error) {
        showError(error.message);
      } finally {
        setLoader(false);
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
        <Wrapper>
          <SearchBox onSubmit={handleSubmit} />

          {movies && (
            <MoviesList
              movies={movies}
              nextPage={incrementPage}
              loader={loader}
            />
          )}
          <BounceLoader
            className="loader"
            loading={loader}
            color={'#751975'}
            size={80}
          />
        </Wrapper>
      </main>
    </>
  );
};

export default Movies;
