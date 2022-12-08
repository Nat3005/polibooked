import styled from 'styled-components';
import profileBackgroundPicture from '../../images/profile_image_background.svg';

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
    height: 90px;
    width: 90px;
    background-size: 90px;
  }

  @media screen and (max-width: 456px) {
    height: 80px;
    width: 80px;
    background-size: 80px;
  }
`;
export const Picture = styled.img`
  border-radius: 100%;
  height: 80px;
  width: 80px;
  background-color: var(--white);
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 75px;
    width: 75px;
  }

  @media screen and (max-width: 456px) {
    height: 70px;
    width: 70px;
  }
`;
