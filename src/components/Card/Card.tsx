import * as S from './Card.styled';

interface Props {
  children: React.ReactNode;
}

const Card = (props: Props) => {
  return <S.Card>{props.children}</S.Card>;
};

export default Card;
