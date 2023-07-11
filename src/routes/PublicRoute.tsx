import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
  const accessToken = localStorage.getItem('@Jusfy:token');

  if (accessToken) {
    return <Navigate to="/list" />;
  }

  return children;
}

export default PublicRoute;