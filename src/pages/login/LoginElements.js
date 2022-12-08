import styled from 'styled-components';
import { GridContainer } from '../../ui_elements/grid/GridElements';
import fullScreenImage from '../../images/homepage_full_screen.svg';

export const LoginContainer = styled(GridContainer)`
  background-color: var(--neutral-purple);
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    background-image: url(${fullScreenImage});
    background-position: center;
    background-size: 100vh;
    background-repeat: no-repeat;
  }
`;

export const LoginImageContainer = styled.div`
  display: flex;
  flex-grow: 1 1 0;
  height: 100vh;
  grid-column: 6/13;
  grid-row: 1/4;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  grid-column: 2/6;
  grid-row: 1/4;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  background-color: var(--white);
  border-radius: var(--outer-radius);
  border: 1px solid var(--primary-light);
  box-shadow: 0px 4px 16px rgba(151, 71, 255, 0.25);
  align-self: center;

  @media screen and (max-width: 768px) {
    grid-column: 2/8;
  }

  @media screen and (max-width: 456px) {
    grid-column: 1/5;
  }
`;
export const LogoImage = styled.img`
  width: 300px;
  height: auto;
`;
