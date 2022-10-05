import * as S from './NavLink.styled';

interface Props {
  to: string;
  children: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const NavLink = (props: Props) => {
  return (
    <S.NavLink to={props.to} onClick={props.onClick} style={props.style}>
      {props.children}
    </S.NavLink>
  );
};

export default NavLink;
