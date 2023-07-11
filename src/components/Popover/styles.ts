import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-top: 24px;

  width: 239px;
  height: 48px;

  border-radius: 4px;

  background-color: #717478;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 16px;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #717478 transparent;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Message = styled.div`
  text-align: center;

  font-weight: 600;
  line-height: 16px;

  margin-top: 16px;
`;