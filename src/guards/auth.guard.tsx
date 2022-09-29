import { Navigate, Outlet } from 'react-router-dom';
import { User } from '../models';
import { PublicRoutes } from '../routes';

interface Props {
  user: User | undefined;
}

export const AuthGuard = (props: Props) => {
  return props.user ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />;
};
