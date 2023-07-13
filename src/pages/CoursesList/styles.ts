import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow-y: auto;

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
