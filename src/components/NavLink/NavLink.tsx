import * as S from './NavLink.styled';

interface Props {
  to: string;
  children: string;
  onClick?: () => void;
}

const NavLink = (props: Props) => {
  return (
    <S.NavLink to={props.to} onClick={props.onClick}>
      {props.children}
    </S.NavLink>
  );
};

export default NavLink;
