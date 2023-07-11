import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const accessToken = localStorage.getItem('@Jusfy:token');

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;