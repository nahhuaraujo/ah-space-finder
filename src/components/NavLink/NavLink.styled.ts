import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  text-decoration: none;
  float: left;
  color: white;
  text-align: center;
  padding: 0.8rem 1rem;

  &:hover {
    background-color: white;
    color: black;
  }

  &:active {
    background-color: green;
    color: white;
  }
`;
