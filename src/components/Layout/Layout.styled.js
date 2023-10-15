import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  height: 45px;
  width: 100%;
  padding: 20px;

  margin: 0 auto;

  border-bottom: 1px solid black;
  background-color: #fff;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 10px;
  text-decoration: none;
  color: black;

  &.active {
    color: white;
    background-color: rgb(117 25 117);
  }
`;
