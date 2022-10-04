import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from '../routes';
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';

export const AuthGuard = () => {
  const user = useSelector((store: AppStore) => store.user);
  return !!user.username ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />;
};
