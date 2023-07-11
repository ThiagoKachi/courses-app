import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLogin?: boolean;
  isLoading?: boolean;
}

export function Input({
  placeholder,
  onChange,
  isLogin = false,
  isLoading = false,
  ...rest
}: InputProps) {
  return (
    <S.Container>
      <S.StyledInput
        onChange={onChange}
        {...rest}
      />
      <S.Placeholder>{placeholder}</S.Placeholder>
      {isLogin && (
        <S.ButtonContainer>
          <S.LoginButton
            disabled={isLoading}
            type='submit'
          >
            Entrar
          </S.LoginButton>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
}
