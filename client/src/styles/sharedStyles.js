import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormCard = styled(Card)`
  width: 40rem;
  text-align: center;
  padding: 20px;
  margin: 100px auto 0 auto;
  border: 2px solid #FF8877;
  color: #FF8877;
`

export const MainNavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #FF8877;
  }
`

export const MainBtn = styled(Button)`
  background: #FF8877;
  border: none;

  &:hover {
    color: #FF8877;
    background: white;
    border: 2px solid #FF8877;
  }
`