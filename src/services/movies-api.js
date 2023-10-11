import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';

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

async function getCast(id) {
  const response = await axios.get(`${MOVIE_URL}${id}/credits`);
  return response.data;
}

async function getReviews(id) {
  const response = await axios.get(`${MOVIE_URL}${id}/reviews`);
  return response.data;
}

async function searchMoviesByValue(value) {
  const response = await axios.get(`${SEARCH_MOVIE_URL}?query=${value}`);
  return response.data;
}
export { getMovies, getMovieDetails, getCast, getReviews, searchMoviesByValue };
