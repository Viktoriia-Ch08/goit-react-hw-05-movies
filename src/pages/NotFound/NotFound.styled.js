import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  padding: 0 20px;
`;

export const LinkToHome = styled(NavLink)`
  position: relative;
  padding: 13px 20px 13px;
  width: 110px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  outline: 0;
  color: #fff;
  border: 1px solid black;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 7px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgb(117 25 117);
    border-radius: 40px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  &:visited {
    color: #fff;
  }
`;

export const Image = styled.img`
  width: 450px;
`;
