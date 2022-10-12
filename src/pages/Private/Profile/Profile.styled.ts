import styled from 'styled-components';

export const Profile = styled.div`
  text-align: center;
  h1 {
    padding: 1rem;
  }
`;

export const ProfileDataContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  width: fit-content;
  border: 1px solid black;
`;

export const ProfileDataRow = styled.div`
  padding: 2rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  p {
    display: inline;
    font-weight: bold;
    padding-right: 1rem;
  }
`;
