import * as S from './styles';

interface InputProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLogin?: boolean;
  isDisabled?: boolean;
}

export function Input({
  placeholder,
  type = 'text',
  onChange,
  value,
  isLogin = false,
  isDisabled = false
}: InputProps) {
  return (
    <S.Container>
      <S.StyledInput
        type={type}
        onChange={onChange}
        value={value}
      />
      <S.Placeholder>{placeholder}</S.Placeholder>
      {isLogin && (
        <S.ButtonContainer>
          <S.LoginButton
            disabled={isDisabled}
            onClick={() => console.log('deu')}
          >
            Entrar
          </S.LoginButton>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
}
