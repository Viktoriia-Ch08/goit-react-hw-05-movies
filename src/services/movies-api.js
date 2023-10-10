import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '59add5323b9549f9d0750f414093a93d';
axios.defaults.params = {
  api_key: API_KEY,
};

async function getMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`);
  return response.data;
}

async function getMovieDetails(id) {
  const response = await axios.get(`${MOVIE_URL}${id}`);
  return response.data;
}
export { getMovies, getMovieDetails };
