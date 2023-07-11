import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { Login } from '../pages/Login';
import { CoursesList } from '../pages/CoursesList';

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }/>
      <Route path="/list" element={
        <PrivateRoute>
          <CoursesList />
        </PrivateRoute>
      }
      />
    </Routes>
  );
}