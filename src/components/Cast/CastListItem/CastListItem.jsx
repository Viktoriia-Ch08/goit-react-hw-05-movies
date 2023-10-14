import { ActorName, Header, Item, Text } from './CastListItem.styled';

const CastListItem = ({ character, name, popularity, img }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <Item>
      <img src={`${BASIC_IMG_URL}${img}`} alt={name} />
      <ActorName>{name}</ActorName>
      <Header>Character:</Header>
      <Text> {character}</Text>
    </Item>
  );
};

export default CastListItem;
