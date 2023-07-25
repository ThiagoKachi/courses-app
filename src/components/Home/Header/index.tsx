import { useNavigate } from 'react-router-dom';

import logoutImg from '../../../assets/images/icons/Logout.svg';

import { Logo } from '../../common/Logo';

import * as S from './styles';

export function Header() {
  const navigate = useNavigate();


  function handleLogout() {
    localStorage.removeItem('@App:token');
    navigate('/login');
  }

  return (
    <S.Container>
      <Logo />

      <S.UserContainer>
        <S.User>Bem vindo, <strong>Gabriel!</strong></S.User>
        <S.Logout onClick={handleLogout}>
          <img src={logoutImg} alt="Botão de logout" />
        </S.Logout>
      </S.UserContainer>
    </S.Container>
  );
}