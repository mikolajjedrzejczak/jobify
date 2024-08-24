import { Navigate } from 'react-router-dom';

interface ConditionalRouteProps {
  condition: boolean;
  redirectTo: string;
  children?: React.ReactNode;
}

const ConditionalRoute: React.FC<ConditionalRouteProps> = ({
  condition,
  redirectTo,
  children,
}): JSX.Element => {
  return condition ? <>{children}</> : <Navigate to={redirectTo} replace />;
};

export default ConditionalRoute;
