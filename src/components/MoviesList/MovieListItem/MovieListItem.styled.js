import styled from 'styled-components';

export const Poster = styled.img`
  width: 200px;
  object-fit: contain;
`;

export const Title = styled.p`
  font-size: 18px;
`;

export const Average = styled.p`
  font-weight: 400;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 15px 15px;
  overflow: hidden;

  background: rgba(217, 217, 217, 0.58);
  border: 2px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);

  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;

  user-select: none;
  font-weight: bolder;
  color: black;

  &:hover {
    border: 2px solid rgb(117 25 117);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;
