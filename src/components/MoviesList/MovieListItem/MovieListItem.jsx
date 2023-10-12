import { Item } from './MovieListItem.styled';
import defaultImg from '../../../images/default-movie@1x.jpg';
import React from 'react';

const MovieListItem = ({ title, average, poster_path }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <Item>
      {poster_path ? (
        <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
      ) : (
        <img src={defaultImg} alt={title} width={'200px'} />
      )}
      <p>{title && title.substring(0, 20)}</p>
      <p>Average: {average.toFixed(1)}</p>
    </Item>
  );
};

export default MovieListItem;
