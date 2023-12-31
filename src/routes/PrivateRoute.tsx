import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const accessToken = localStorage.getItem('@App:token');

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;