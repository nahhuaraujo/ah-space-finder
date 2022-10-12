import styled from 'styled-components';

export const ConfirmReservationModal = styled.div`
  min-width: fit-content;
  width: 40%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  header {
    text-align: left;
  }

  footer {
    display: flex;
    justify-content: right;
    > :first-child {
      margin-right: 0.3rem;
    }
  }
`;

export const ConfirmReservationModalBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ConfirmReservationMessage = styled.div`
  margin: 1rem 0;
  text-align: left;
`;

export const ConfirmReservationModalButton = styled.button`
  padding: 0.3rem 1rem;
  background-color: white;

  &:hover {
    background-color: #333;
    color: white;
  }

  &:active {
    background-color: green;
    color: white;
  }
`;

export const CloseReservationModalButton = styled.button`
  padding: 0.3rem 1rem;
  background-color: red;
  border: 2px solid black;

  &:hover {
    background-color: red;
    color: white;
  }

  &:active {
    background-color: darkred;
    color: white;
  }
`;
