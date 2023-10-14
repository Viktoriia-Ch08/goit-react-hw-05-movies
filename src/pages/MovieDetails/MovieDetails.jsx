import { useEffect, useRef, useState } from 'react';
import {
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
import {
  Container,
  DetailsItem,
  DetailsLink,
  DetailsList,
  GenreItem,
  GenresList,
  Header,
  ImageWrapper,
  InfoContainer,
  InfoWrapper,
  MovieContainer,
} from './MovieDetails.styled';

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
          <MovieContainer>
            <InfoWrapper>
              <ImageWrapper>
                <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
              </ImageWrapper>
            </InfoWrapper>
            <InfoContainer>
              <Header>{title}</Header>
              <h2>Overview </h2>
              <p>Release data: {release_date}</p>

              <p>{overview}</p>
              <h3>Genres</h3>
              <GenresList>
                {genres &&
                  genres.map(({ id, name }) => {
                    return <GenreItem key={id}>{name}</GenreItem>;
                  })}
              </GenresList>
              <h3>Details</h3>
              <DetailsList>
                <DetailsItem>
                  <DetailsLink to="cast">Cast</DetailsLink>
                </DetailsItem>
                <DetailsItem>
                  <DetailsLink to="reviews ">Reviews </DetailsLink>
                </DetailsItem>
              </DetailsList>
            </InfoContainer>
          </MovieContainer>
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
