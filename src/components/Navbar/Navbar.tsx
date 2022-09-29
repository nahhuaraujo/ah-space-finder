import { Link } from 'react-router-dom';
import { User } from '../../models';
import * as S from './Navbar.styled';

interface Props {
  user: User;
}

const Navbar = (props: Props) => {
  return (
    <S.Navbar>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
    </S.Navbar>
  );
};
export default Navbar;
