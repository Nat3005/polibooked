import styled from 'styled-components';
import profileBackgroundPicture from '../../images/profile_image_background.svg';
import { SmallText } from '../text/TextElements';

export const LeftSidebarContainer = styled.div`
  height: 100vh;
  background: var(--white);
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
    grid-row: 3/4;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    display: flex;
    position: fixed;
    justify-content: end;
  }
`;

export const ProfilePictureContainer = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${profileBackgroundPicture});
  background-position: center;
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ProfilePicutre = styled.img`
  border-radius: 100%;
  height: 80px;
  width: 80px;
  object-fit: cover;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  align-self: flex-start;
  width: 70%;
  height: auto;
  margin-left: -20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LeftPanelText = styled(SmallText)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
