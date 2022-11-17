import styled from 'styled-components';
import { SmallText } from '../text/TextElements';
import ProfilePicture from '../profilePicture';

export const LeftSidebarContainer = styled.div`
  height: 100vh;
  background: var(--white);
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PanelProfilePicture = styled(ProfilePicture)`
  // TODO: display none nie bangla
  // https://styled-components.com/docs/basics#styling-any-component
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  flex-wrap: wrap;

`;

export const Logo = styled.img`
  align-self: flex-start;
  width: 70%;
  height: auto;
  margin-left: -20px;

`;


