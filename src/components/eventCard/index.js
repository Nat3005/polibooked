import React from 'react';
import { PropTypes } from 'prop-types';
import { SmallText } from '../text/TextElements';
import {
  EventCardContainer,
  TagContainer,
  TitleContainer,
} from './EventCardElements';
import { Chip } from '../chips/ChipsElements';

function EventCard({ variant, title, time, description, tags }) {
  const addHashtag = (tag) => {
    const hashtag = '';
    return hashtag.concat(`#${tag}`);
  };

  const chooseType = (type) => {
    if (type === 'tutoring') return 'purpleGreyish';
    return 'yellowGreyish';
  };

  const type = chooseType(variant);

  return (
    <EventCardContainer variant={variant}>
      <TitleContainer>
        <SmallText variant="dark" weight="bold">
          {title}
        </SmallText>
        <Chip variant="dark">{time}</Chip>
      </TitleContainer>
      <SmallText variant="dark" weight="normal">
        {description}
      </SmallText>
      <TagContainer>
        {tags.map((item) => (
          <Chip variant={type}>{addHashtag(item)}</Chip>
        ))}
      </TagContainer>
    </EventCardContainer>
  );
}
EventCard.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.objectOf(PropTypes.Array),
};

EventCard.defaultProps = {
  variant: '',
  title: '',
  time: '',
  description: '',
  tags: [],
};

export default EventCard;
