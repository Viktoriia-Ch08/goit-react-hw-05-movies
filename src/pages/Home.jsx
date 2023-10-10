import HomeList from 'components/HomeList/HomeList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await getMovies();
      setMovies(results);
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <HomeList movies={movies} />
    </main>
  );
};

export default Home;
