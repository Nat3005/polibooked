import React from 'react'
import { SmallText } from '../text/TextElements';
import { EventCardContainer, TagContainer, TitleContainer } from './EventCardElements'
import {Chip} from '../chips/ChipsElements';
function EventCard({variant, title, time, description, tags}) {
    
    const addHashtag = (tag) => {
        let hashtag = '';
        return hashtag.concat('#'+ tag);
    };

    const chooseType = (type) => {

        if(type === "tutoring")
            return 'purpleGreyish';
        else
            return 'yellowGreyish';
    }

    let type = chooseType(variant);

  return (


    <EventCardContainer variant={variant}>
        <TitleContainer>
            <SmallText variant="dark" weight="bold">{title}</SmallText>
            <Chip variant="dark">{time}</Chip>
        </TitleContainer>
        <SmallText variant="dark" weight="normal">{description}</SmallText>
        <TagContainer>      
        {
                tags.map((item) => (
                    <Chip variant={type}>{addHashtag(item)}</Chip>
                ))

        }
        </TagContainer>
    </EventCardContainer>
  )
}

export default EventCard;