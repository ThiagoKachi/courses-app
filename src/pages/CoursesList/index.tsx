import { useEffect, useState } from 'react';

import { Header } from '../../components/Home/Header';
import { Card } from '../../components/Home/Card';
import LoadingSpinner from '../../components/common/Spinner';
import { Modal } from '../../components/common/Modal';

import api from '../../services/api';
import { Course, Teacher } from '../../models/Course';

import * as S from './styles';

export function CoursesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  function handleOpenModal(course: Course) {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  async function getCoursesList() {
    setIsLoading(true);

    try {
      const { data } = await api.get('/cursos?_limit=12');
      setCourses(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGetTeacher() {
    try {
      const { data } = await api.get('/professores');
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoursesList();
    handleGetTeacher();
  }, []);

  const teacher = teachers.find(
    (teacher) => teacher.id === selectedCourse?.professores[0]
  );

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

      {isModalOpen && selectedCourse && (
        <Modal course={selectedCourse} onClose={closeModal} teacher={teacher} />
      )}
    </S.Container>
  );
}
