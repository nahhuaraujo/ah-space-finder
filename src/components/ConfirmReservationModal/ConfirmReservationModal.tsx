import { Card } from '../';
import * as S from './ConfirmReservationModal.styled';

interface Props {
  show: boolean;
  confirmModal: () => void;
  closeModal: () => void;
}

const Modal = (props: Props) => {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <S.ConfirmReservationModalBackdrop onClick={props.closeModal} />
      <S.ConfirmReservationModal>
        <Card>
          <header>
            <h3>Space reservation</h3>
          </header>
          <S.ConfirmReservationMessage>
            Would you like to confirm the reservation for this space?
          </S.ConfirmReservationMessage>
          <footer>
            <S.ConfirmReservationModalButton onClick={props.confirmModal}>Confirm</S.ConfirmReservationModalButton>
            <S.CloseReservationModalButton onClick={props.closeModal}>Close</S.CloseReservationModalButton>
          </footer>
        </Card>
      </S.ConfirmReservationModal>
    </>
  );
};

export default Modal;
