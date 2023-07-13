import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  height: 47px;

  margin-bottom: 49px;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const Logout = styled.button`
  cursor: pointer;

  margin-top: 6px;
  margin-left: 16px;

  width: 32px;
  height: 32px;

  background: none;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const User = styled.div`
  font-size: 12px;
  line-height: 16px;

  color: #333333;

  margin-top: 16px;
`;