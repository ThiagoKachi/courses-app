import { useEffect, useState } from 'react';

import { Header } from '../../components/Home/Header';
import { Card } from '../../components/Home/Card';
import LoadingSpinner from '../../components/common/Spinner';
import { Modal } from '../../components/common/Modal';
import { Pagination } from '../../components/common/Pagination';

import api from '../../services/api';
import { Course, Teacher } from '../../models/Course';

import * as S from './styles';

export function CoursesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const COURSES_PER_PAGE = 12;

  function handleOpenModal(course: Course) {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  async function getCoursesList(page: number) {
    setIsLoading(true);

    try {
      const { data } = await api
        .get('/cursos', {
          params: {
            _page: page,
            _limit: COURSES_PER_PAGE
          }
        });

      if (data.length > 0) {
        setCourses(data);
      }
    } catch (error) {
      alert`Erro ao carregar cursos`;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGetTeachers() {
    try {
      const { data } = await api.get('/professores');
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoursesList(currentPage);
    handleGetTeachers();
  }, []);

  const teacher = teachers
    .find((teacher) => teacher.id === selectedCourse?.professores[0]);

  async function handleNextPage() {
    if (courses.length === COURSES_PER_PAGE) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      await getCoursesList(nextPage);
    }
  }

  async function handlePreviousPage() {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      await getCoursesList(previousPage);
    }
  }

  return (
    <S.Container>
      <Header />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <S.CardList>
          {courses.map((course) => {
            const teacher = teachers.find(
              (teacher) => teacher.id === course.professores[0]
            );
            return (
              <Card
                key={course.id}
                course={course}
                onClick={() => handleOpenModal(course)}
                teacher={teacher}
              />
            );
          })}
        </S.CardList>
      )}

      <Pagination
        currentPage={currentPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />

      {isModalOpen && selectedCourse && (
        <Modal course={selectedCourse} onClose={closeModal} teacher={teacher} />
      )}
    </S.Container>
  );
}
