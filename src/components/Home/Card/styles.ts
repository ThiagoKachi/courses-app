import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 272px;
  height: 160px;

  padding: 16px;
  gap: 16px;

  background-color: #FFFFFF;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);

  border-radius: 4px;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const CourseImage = styled.img`
  width: 81px;
  height: 122px;

  object-fit: cover;
`;

export const CourseContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CourseTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  color: #333333;
`;

export const CourseDescription = styled.div`
  font-size: 12px;
  line-height: 20px;

  color: #41C78F;
`;

export const CourseInfo = styled.div`

`;

export const CourseInfoText = styled.div`
  font-size: 12px;
  line-height: 20px;

  color: #999999;
`;