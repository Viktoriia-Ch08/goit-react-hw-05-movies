const CastListItem = ({ character, name, popularity, img }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <li>
      <img src={`${BASIC_IMG_URL}${img}`} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
      <p>Popularity: {popularity}</p>
    </li>
  );
};

export default CastListItem;
