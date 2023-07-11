import { useEffect } from 'react';
import api from '../../services/api';

export function CoursesList() {
  async function getCoursesList() {
    const { data } = await api.get('/cursos');
    console.log(data);
  }

  useEffect(() => {
    getCoursesList();
  }, []);

  return (
    <div>AQUI</div>
  );
}