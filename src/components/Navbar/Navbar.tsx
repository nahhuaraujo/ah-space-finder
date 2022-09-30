import { Link } from 'react-router-dom';
import * as S from './Navbar.styled';

const Navbar = () => {
  return (
    <S.Navbar>
      <Link to='/'>Home</Link>
      <Link to='profile'>Profile</Link>
    </S.Navbar>
  );
};
export default Navbar;
