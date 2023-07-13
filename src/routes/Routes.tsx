import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { Login } from '../pages/Login';
import { CoursesList } from '../pages/CoursesList';

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/list" element={
        <PrivateRoute>
          <CoursesList />
        </PrivateRoute>
      }
      />
    </Routes>
  );
}