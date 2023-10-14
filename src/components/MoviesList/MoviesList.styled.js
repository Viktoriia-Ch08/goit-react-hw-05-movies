import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const LinkToMovieDetails = styled(NavLink)`
  width: calc((100% - 60px) / 4);
`;
