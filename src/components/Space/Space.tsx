import { useState } from 'react';
import { ConfirmReservationModal } from '../';
import { ISpace } from '../../models';
import * as S from './Space.styled';

interface Props {
  space: ISpace;
}

const Space = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const closeModalHandler = () => {
    setShow(false);
  };

  const reserveSpaceHandler = () => {
    setShow(true);
  };

  const confirmModalHandler = () => {
    console.log('Reserving space...');
  };

  return (
    <>
      <ConfirmReservationModal show={show} confirmModal={confirmModalHandler} closeModal={closeModalHandler} />
      <S.Space>
        <S.SpaceImage src={props.space.imageUrl} alt={props.space.name} />
        <S.SpaceName>{props.space.name}</S.SpaceName>
        <S.SpaceLocation>{props.space.location}</S.SpaceLocation>
        <S.SpaceAddress>{props.space.address}</S.SpaceAddress>
        <S.SpaceAvailable>{props.space.available}</S.SpaceAvailable>
        <S.SpaceReserveButton onClick={reserveSpaceHandler} disabled={!!props.space.userId}>
          {!!props.space.userId ? 'Reserved' : 'Reserve'}
        </S.SpaceReserveButton>
      </S.Space>
    </>
  );
};

export default Space;
