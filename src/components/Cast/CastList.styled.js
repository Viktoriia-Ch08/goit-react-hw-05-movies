import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  .loader {
    top: 50%;
    left: 50%;
    transition: transform(-50%, -50%);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
