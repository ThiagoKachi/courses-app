import { useNavigate } from 'react-router-dom';
import logoImg from '../../../assets/images/jusfy.png';
import logoutImg from '../../../assets/images/Logout.svg';

import * as S from './styles';

export function Header() {
  const navigate = useNavigate();


  function handleLogout() {
    localStorage.removeItem('@Jusfy:token');
    navigate('/');
  }

  return (
    <S.Container>
      <S.Logo src={logoImg} alt="Jusfy logo" />

      <S.UserContainer>
        <S.User>Bem vindo, <strong>Gabriel!</strong></S.User>
        <S.Logout onClick={handleLogout}>
          <img src={logoutImg} alt="Botão de logout" />
        </S.Logout>
      </S.UserContainer>
    </S.Container>
  );
}