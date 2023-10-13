import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LinkToMovieDetails = styled(NavLink)`
  width: 200px;
`;
