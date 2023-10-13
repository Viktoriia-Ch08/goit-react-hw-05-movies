import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { getMovies } from 'services/movies-api';
import { Wrapper } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchMovies = async () => {
      const { results } = await getMovies();
      setLoader(false);
      setMovies(results);
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <Wrapper>
        <BounceLoader
          className="loader"
          loading={loader}
          color={'#751975'}
          size={80}
        />
      </Wrapper>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
