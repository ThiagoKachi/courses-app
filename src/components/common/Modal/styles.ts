import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  gap: 48px;

  width: 70%;
  height: 80%;

  padding: 48px;

  border-radius: 8px;

  background-color: #fff;

  @media (max-width: 992px) {
    width: 90%;
    height: 90%;
    flex-direction: column;

    margin-top: 32px;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;

  border-radius: 4px;

  box-shadow: 4px 6px 18px 2px rgba(0, 0, 0, 0.2);

  object-fit: cover;

  @media (max-width: 992px) {
    width: 100%;
    height: 35%;
  }
`;

export const CourseInfo = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 24px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;

  color: #333333;
`;

export const Authors = styled.div`
  font-size: 12px;
  line-height: 20px;

  color: #41C78F;
`;

export const SectionHeader = styled.div`
  font-weight: 500;
  line-height: 20px;

  text-transform: uppercase;

  color: #333333;

  margin-bottom: 16px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  strong {
    font-weight: 500;
    line-height: 30px;

    color: #333333;
  }

  span {
    color: #999999;
  }
`;

export const Description = styled.div`
  line-height: 30px;
  text-align: justify;

  color: #999999;
  
  overflow: auto;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;

  @media (max-width: 992px) {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
