import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/Search/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByValue } from 'services/movies-api';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const showError = title => {
    toast.error(title, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const showWarning = title => {
    toast.warning(title, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <>
      <main>
        <SearchBox onSubmit={handleSubmit} />
        {loader && <ClipLoader />}
        {movies && <MoviesList movies={movies} nextPage={incrementPage} />}
      </main>
      <ToastContainer />
    </>
  );
};

export default Movies;
