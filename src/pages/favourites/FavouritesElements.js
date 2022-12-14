import styled from 'styled-components';

export const FavouritesContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 1.25rem;
`;

export const ImageContainer = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
  justify-self: center;
  height: 85vh;
  row-gap: 1rem;
`;

export const NoFavouritesImgage = styled.img`
  width: 250px;
  height: auto;
`;
