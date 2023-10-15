import { ActorName, Header, Item, Text } from './CastListItem.styled';
import defaultImg from '../../../images/no-available-image.png';
import { Poster } from 'components/MoviesList/MovieListItem/MovieListItem.styled';

const CastListItem = ({ character, name, img }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <Item>
      {img ? (
        <Poster src={`${BASIC_IMG_URL}${img}`} alt={name} />
      ) : (
        <Poster src={defaultImg} alt={name} />
      )}

      <ActorName>{name}</ActorName>
      <Header>Character:</Header>
      <Text> {character}</Text>
    </Item>
  );
};

export default CastListItem;
