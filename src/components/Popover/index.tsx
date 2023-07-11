import * as S from './styles';

interface PopoverProps {
  onClose: () => void;
}

export function Popover({ onClose }: PopoverProps) {
  return (
    <S.Container onClick={onClose}>
      <S.Message>
        Email e/ou senha incorretos.
      </S.Message>
    </S.Container>
  );
}