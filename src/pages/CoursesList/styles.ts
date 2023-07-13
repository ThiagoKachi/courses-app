import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  background-color: #85B29C;

  padding: 40px 115px;

  @media screen and (max-width: 1024px) {
    padding: 5% 16px;
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
