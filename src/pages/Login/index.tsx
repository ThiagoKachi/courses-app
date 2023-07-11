import { Input } from '../../components/Input';
import { Popover } from '../../components/Popover';

import logoImg from '../../assets/images/logo.png';

import * as S from './styles';
import { useState } from 'react';

export function Login() {
  const [hasError, setHasError] = useState(true);

  return (
    <S.Container>
      <S.Form>
        <S.Logo src={logoImg} alt="Jusfy logo" />
        <Input placeholder='Email' type='email' />
        <Input placeholder='Senha' type='password' isLogin />

        {hasError ? (
          <Popover onClose={() => setHasError(false)} />
        ) : null}
      </S.Form>
    </S.Container>
  );
}