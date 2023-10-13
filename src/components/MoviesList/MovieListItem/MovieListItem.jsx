import { Item, Poster, Text } from './MovieListItem.styled';
import defaultImg from '../../../images/default-movie@1x.jpg';
import React from 'react';

const MovieListItem = ({ title, average, poster_path }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <Item>
      {poster_path ? (
        <Poster src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
      ) : (
        <Poster src={defaultImg} alt={title} width={'200px'} />
      )}
      <Text>{title && title.substring(0, 20)}</Text>
      <Text>Average: {average.toFixed(1)}</Text>
    </Item>
  );
};

export default MovieListItem;
