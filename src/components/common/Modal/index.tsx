import { Course, Teacher } from '../../../models/Course';

import closeBtn from '../../../assets/images/close-btn.svg';
import { transformDuration } from '../../../utils/transform/transformDuration';

import * as S from './styles';

interface ModalProps {
  course: Course;
  onClose: () => void;
  teacher: Teacher | undefined;
}

export function Modal({ course, onClose, teacher }: ModalProps) {
  return (
    <S.Container>
      <S.CloseButton onClick={onClose}>
        <img src={closeBtn} alt="Botão para fechar modal" />
      </S.CloseButton>

      <S.Content>
        {/* Imagem da erro retornando do back-end, provavelmente erro de permissão */}
        {/* <S.Image src={course.capa} alt={course.titulo} /> */}
        <S.Image
          src="https://e-dou.com.br/wp-content/uploads/2017/08/propor-uma-lei.png"
          alt={course.titulo}
        />

        <S.CourseInfo>
          <div>
            <S.Title>{course.titulo}</S.Title>
            <S.Authors>{`${teacher?.nome} ${teacher?.sobrenome}`}</S.Authors>
          </div>

          <div>
            <S.SectionHeader>Informações</S.SectionHeader> 
            <S.Info>
              <strong>Duração</strong>
              <span>
                {transformDuration(course.informacoes?.duracao)}
              </span>
            </S.Info> 
            <S.Info>
              <strong>Responsável</strong>
              <span>{course.informacoes?.responsavel}</span>
            </S.Info> 
            <S.Info>
              <strong>Publicação</strong>
              <span>{course.informacoes?.publicacao}</span>
            </S.Info> 
            <S.Info>
              <strong>Idioma</strong>
              <span>{course.informacoes?.idioma}</span>
            </S.Info> 
            <S.Info>
              <strong>Certificação</strong>
              <span>
                {course.informacoes?.certificacao
                  ? 'Com certificação'
                  : 'Sem certificação'}
              </span>
            </S.Info> 
            <S.Info>
              <strong>Numeração</strong>
              <span>{course.numeracao}</span>
            </S.Info> 
            <S.Info>
              <strong>Código</strong>
              <span>{course.codigo}</span>
            </S.Info> 
          </div>

          <div>
            <S.SectionHeader>SINPOSE DO CURSO</S.SectionHeader> 
            <S.Description>{course.sinopse}</S.Description>
          </div>
        </S.CourseInfo>

      </S.Content>
    </S.Container>
  );
}