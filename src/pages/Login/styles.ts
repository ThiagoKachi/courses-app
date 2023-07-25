import styled from 'styled-components';

import bgImage from '../../assets/images/banner-desktop.png';
import bgMobileImage from '../../assets/images/banner-mobile.png';

export const Container = styled.div`
  height: 100vh;

  background: url(${bgImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media (max-width: 480px) {
    background: url(${bgMobileImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 368px;
  height: 100%;
  padding-left: 115px;
  
  @media (max-width: 560px) {
    padding-left: 8%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;