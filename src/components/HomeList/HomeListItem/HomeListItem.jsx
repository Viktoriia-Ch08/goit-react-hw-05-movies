import { Link } from 'react-router-dom';

const HomeListItem = ({ id, title, average, poster_path }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <li>
      <Link to={`movies/${id}`}>
        <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
        <p>Title:{title && title.substring(0, 20)}</p>
        <p>Average: {average}</p>
      </Link>
    </li>
  );
};

export default HomeListItem;
