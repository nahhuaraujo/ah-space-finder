import { useUserActions } from '../../hooks';
import { PrivateRoutes, PublicRoutes } from '../../routes';
import { NavLink } from '../NavLink';
import * as S from './Navbar.styled';

const Navbar = () => {
  const { logout } = useUserActions();

  const logoutHandler = () => {
    logout();
  };

  return (
    <S.Navbar>
      <NavLink to=''>Home</NavLink>
      <NavLink to={PrivateRoutes.DASHBOARD}>Dashboard</NavLink>
      <NavLink to={PrivateRoutes.PROFILE}>Profile</NavLink>
      <NavLink to={`/${PublicRoutes.LOGIN}`} onClick={logoutHandler}>
        Logout
      </NavLink>
    </S.Navbar>
  );
};

export default Navbar;
