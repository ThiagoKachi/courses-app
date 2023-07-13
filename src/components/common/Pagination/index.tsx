import prevBtn from '../../../assets/images/icons/prev-bnt.svg';
import nextBtn from '../../../assets/images/icons/next-bnt.svg';

import * as S from './styles';

interface PaginationProps {
  currentPage: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export function Pagination({
  currentPage,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Info>
          <span>Página </span>
          <strong>{currentPage} </strong>
          <span>de </span>
          <strong>100</strong>
        </S.Info>

        <S.Controllers>
          <button
            type="button"
            onClick={onPreviousPage}
            disabled={currentPage === 1}
          >
            <img src={prevBtn} alt="Botão para voltar" />
          </button>

          <button
            type="button"
            onClick={onNextPage}
            disabled={currentPage === 100}
          >
            <img src={nextBtn} alt="Botão para avançar" />
          </button>
        </S.Controllers>
      </S.Content>
    </S.Container>
  );
}
