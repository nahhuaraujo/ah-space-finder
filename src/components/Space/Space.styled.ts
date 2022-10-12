import styled from 'styled-components';

export const Space = styled.div`
  border: 1px solid black;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  width: fit-content;
`;

export const SpaceImage = styled.img`
  width: 30vw;
`;

export const SpaceName = styled.label`
  display: block;
  text-align: center;
  font-weight: bold;
`;

export const SpaceLocation = styled.label`
  display: block;
`;

export const SpaceAddress = styled.label`
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const SpaceAvailable = styled.label``;

export const SpaceReserveButton = styled.button`
  padding: 0.3rem 1rem;
  margin: 1rem;
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
