import { useState } from 'react';

import { Input } from '../../components/Input';
import { Popover } from '../../components/Popover';

import { api } from '../../services/api';

import logoImg from '../../assets/images/logo.png';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

interface LoginDataProps {
  email: string;
  password: string;
}

const baseURL = import.meta.env.VITE_BASE_URL;

export function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loginData, setLoginData] = useState<LoginDataProps>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsLoading(true);
    setHasError(false);

    try {
      const { data } = await api.post(`${baseURL}/auth/login`, loginData);
      localStorage.setItem('@Jusfy:token', data.access_token);

      navigate('/list');
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Logo src={logoImg} alt="Jusfy logo" />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          isLoading={isLoading}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          isLogin
          isLoading={isLoading}
          onChange={handleInputChange}
        />

        {hasError ? <Popover onClose={() => setHasError(false)} /> : null}
      </S.Form>
    </S.Container>
  );
}
