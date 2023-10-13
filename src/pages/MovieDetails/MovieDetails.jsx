import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/movies-api';
import CastList from 'components/Cast/CastList';
import ReviewsList from 'components/Reviews/ReviewsList';
import { LinkToHome } from 'pages/NotFound/NotFound.styled';
import { Container, ImageWrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const { movieId } = useParams();
  const location = useLocation();
  const backHomeLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      const movieInfo = await getMovieDetails(movieId);
      setMovie(movieInfo);
    }

    fetchMovie();
  }, [movieId]);

  const { title, poster_path, release_date, overview, genres } = movie;

  return (
    <>
      {movie && (
        <Container>
          <LinkToHome to={backHomeLink.current}>Back Home</LinkToHome>
          <ImageWrapper>
            <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
          </ImageWrapper>
          <h1>{title}</h1>
          <p>Release data: {release_date}</p>
          <h2>Overview </h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres &&
              genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
          </ul>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <Link to="reviews ">Reviews </Link>
            <li></li>
          </ul>

          <Outlet />

          <Routes>
            <Route path="cast" element={<CastList id={movieId} />} />
            <Route path="reviews" element={<ReviewsList id={movieId} />} />
          </Routes>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
