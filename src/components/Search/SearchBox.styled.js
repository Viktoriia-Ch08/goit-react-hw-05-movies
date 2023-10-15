import styled from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 200px;
  height: 45px;
  padding: 0 18px;

  box-shadow: none;
  border: 1px solid rgb(117 25 117);
  border-radius: 17px;
  background-color: #fff;
  transition: box-shadow 400ms linear;
  font-family: 'Mooli', sans-serif;

  &:focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  position: relative;
  padding: 13px 20px 13px;
  width: 110px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
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
