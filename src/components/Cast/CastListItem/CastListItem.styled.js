import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: calc((100% - 60px) / 5);
  min-height: 450px;
  padding: 0 20px 20px;
  overflow: hidden;
  text-align: center;

  background: rgba(217, 217, 217, 0.58);
  border: 2px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);

  border-radius: 17px;
  transition: all 0.5s;
  color: black;

  &:hover {
    border: 2px solid rgb(117 25 117);
    transform: scale(1.05);
  }
`;

export const ActorName = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  overflow-wrap: break-word;
`;

export const Header = styled.h3`
  font-weight: 400;
  text-decoration: underline;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
`;
