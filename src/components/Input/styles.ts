import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 368px;
  height: 64px;

  margin-bottom: 16px;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  border-radius: 4px;
  border: none;

  color: white;
  background-color: rgba(0, 0, 0, 0.32);

  font-size: 16px;
  line-height: 24px;

  padding-left: 18px;
  padding-top: 24px;

  &:focus {
    outline: none;
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 10%;
  left: 16px;

  color: #666F6E;

  line-height: 24px;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;

  display: flex;
  align-items: center;

  padding: 0 8px;
`;

export const LoginButton = styled.button`
  background-color: #fff;
  color: #41C78F;

  font-size: 16px;
  font-weight: 500;
  line-height: 16px;

  padding: 4px 8px;

  height: 36px;
  width: 85px;

  border: none;
  border-radius: 44px;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid #41C78F;
  }

  &:disabled {
    cursor: not-allowed;
    border: 2px solid lightgray;
    color: lightgray;
  }

  &:active {
    transform: scale(0.98);
  }
`;