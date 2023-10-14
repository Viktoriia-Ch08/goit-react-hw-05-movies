import { Item } from './CastListItem.styled';

const CastListItem = ({ character, name, popularity, img }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <Item>
      <img src={`${BASIC_IMG_URL}${img}`} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
      <p>Popularity: {popularity}</p>
    </Item>
  );
};

export default CastListItem;
