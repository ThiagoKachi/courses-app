import styled from 'styled-components';

export const Logo = styled.div`
  height: 47px;

  margin-bottom: 16px;

  border-bottom: 1px solid white;

  span {
    color: white;


    &:first-child {
      font-weight: 600;
      font-size: 32px;

      letter-spacing: 0.05em;

      margin-right: 8px;
    }

    &:last-child {
      font-weight: 400;
      font-size: 24px;

      letter-spacing: 0.02em;
    }
  }
`;