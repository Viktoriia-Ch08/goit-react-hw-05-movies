import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;

  font-weight: 500;
`;

export const MovieContainer = styled.div`
  display: flex;

  gap: 15px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  border: 2px solid rgb(117 25 117);
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  transition: all 0.5s;
  overflow: hidden;
`;

export const MovieImage = styled.img`
  width: 200px;
  object-fit: contain;
`;

export const Header = styled.h1`
  font-size: 40px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const GenreItem = styled.li`
  padding: 7px;
  text-align: center;
  border: 1px solid rgb(117 25 117);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(117 25 117);
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const DetailsItem = styled.li`
  padding: 7px;
  text-align: center;
  border: 1px solid rgb(117 25 117);
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    background-color: rgb(117 25 117);
  }
`;

export const DetailsLink = styled(NavLink)`
  color: black;

  &:visited {
    color: black;
  }
`;
