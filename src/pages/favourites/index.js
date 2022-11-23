import React from 'react';
import AnnouncementCard from '../../components/announcementCard';
import { useFavourites } from '../../dataManagement';
import {
  FavouritesContainer,
  ImageContainer,
  NoFavouritesImgage,
} from './FavouritesElements';
import NoResultsImg from '../../images/no_favourites.png';
import { MediumText } from '../../components/text/TextElements';

function Favourites({ openEditModal }) {
  const [favourites] = useFavourites();

  return (
    <FavouritesContainer>
      {favourites.length !== 0 &&
        favourites?.map((item) => (
          <AnnouncementCard
            announcement={item}
            key={item.id}
            openEditModal={openEditModal}
            type="favourites"
          />
        ))}
      {favourites.length === 0 && (
        <ImageContainer>
          <NoFavouritesImgage src={NoResultsImg} />
          <MediumText>Brak ulubionych ogłoszeń</MediumText>
        </ImageContainer>
      )}
    </FavouritesContainer>
  );
}

export default Favourites;
