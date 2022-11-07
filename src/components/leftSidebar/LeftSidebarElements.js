import styled from 'styled-components';
import profileBackgroundPicture from '../../images/profile_image_background.svg';

export const LeftSidebarContainer = styled.div`
  height: 100vh;
  background: var(--white);
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-top: 2rem;
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
`
export const ProfilePicutre = styled.img`
  border-radius: 100%;
  height: 80px;
  width: 80px;
  object-fit: cover;
`

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  flex-wrap: wrap;
`

export const Logo =  styled.img`
  align-self: flex-start;
  width: 70%;
  height: auto;
  margin-left: -20px;
`