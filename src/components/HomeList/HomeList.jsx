import { StyledHomeList } from './HomeList.styled';
import HomeListItem from './HomeListItem/HomeListItem';

const HomeList = ({ movies }) => {
  return (
    <StyledHomeList>
      {movies.map(({ id, title, vote_average, poster_path }) => {
        return (
          <HomeListItem
            key={id}
            id={id}
            title={title}
            average={vote_average}
            poster_path={poster_path}
          />
        );
      })}
    </StyledHomeList>
  );
};

export default HomeList;
