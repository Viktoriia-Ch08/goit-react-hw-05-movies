import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { getMovies } from 'services/movies-api';
import { Wrapper } from './Home.styled';
import { showError } from 'services/notification';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchMovies = async () => {
      try {
        const { results } = await getMovies();
        setMovies(results);
      } catch (error) {
        showError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <Wrapper>
        <MoviesList movies={movies} />
        <BounceLoader
          className="loader"
          loading={loader}
          color={'#751975'}
          size={80}
        />
      </Wrapper>
    </main>
  );
};

export default Home;
