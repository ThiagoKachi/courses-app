import { transformDuration } from '../../../utils/transform/transformDuration';
import { Course, Teacher } from '../../../models/Course';

import * as S from './styles';

interface CardProps {
  course: Course;
  onClick: () => void;
  teacher: Teacher | undefined;
}

export function Card({ course, onClick, teacher }: CardProps) {
  return (
    <S.Container onClick={onClick}>
      {/* Imagem da erro retornando do back-end, provavelmente erro de permissão */}
      {/* <S.CourseImage src={course.capa} alt={course.titulo} /> */}
      <S.CourseImage
        src="https://e-dou.com.br/wp-content/uploads/2017/08/propor-uma-lei.png"
        alt={course.titulo}
      />

      <S.CourseContainer>
        <div>
          <S.CourseTitle>{course.titulo}</S.CourseTitle>
          <S.CourseDescription>
            {`${teacher?.nome} ${teacher?.sobrenome}`}
          </S.CourseDescription>
        </div>

        <S.CourseInfo>
          <S.CourseInfoText>
            {transformDuration(course.informacoes?.duracao)}
          </S.CourseInfoText>
          <S.CourseInfoText>{course.informacoes?.responsavel}</S.CourseInfoText>
          <S.CourseInfoText>
            Publicado em {course.informacoes?.publicacao}
          </S.CourseInfoText>
        </S.CourseInfo>
      </S.CourseContainer>
    </S.Container>
  );
}
