import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 40px 50px;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  @media screen and (max-width: 350px) {
    padding: 40px 20px;
  }
`;

export const Container = styled.div``;

export const Info = styled.div`
  margin-right: 16px;

  span {
    color: #333333
  }

  strong {
    color: #333333;
    font-weight: 500;
  }
`;

export const Controllers = styled.div`
  button {
    border: none;

    background-color: transparent;

    &:nth-child(2) {
      margin-left: 8px;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
