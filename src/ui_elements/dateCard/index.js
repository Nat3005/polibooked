import React from 'react';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import dayjs from 'dayjs';
import { TertiaryButton } from '../buttons/ButtonElements';
import { MediumText, SmallText } from '../text/TextElements';
import { BoxContainer, DateCardContainer } from './DateCardElements';
import { removeEvent } from '../../firebase/eventsService';

function DateCard({ eventID, startDate, endDate, type, onClick, status }) {
  const handleRemove = (e) => {
    e.preventDefault();

    removeEvent(eventID).then(() => {
      console.warn('O la Boga! To też sie Udao się!');
    });
  };

  return (
    <DateCardContainer onClick={onClick}>
      <SmallText variant="dark" weight="bold">
        {dayjs.unix(startDate.seconds).format('DD-MM-YYYY')}
      </SmallText>
      <BoxContainer status={status}>
        <MediumText variant="dark" weight="bold">
          {dayjs.unix(startDate.seconds).format('HH:mm')} -{' '}
          {dayjs.unix(endDate.seconds).format('HH:mm')}
        </MediumText>
        {type === 'editable' && (
          <TertiaryButton
            size="small"
            variant="dark"
            onClick={handleRemove}
            aria-label="Usuń"
          >
            <DeleteOutlineRoundedIcon> </DeleteOutlineRoundedIcon>Usuń
          </TertiaryButton>
        )}
      </BoxContainer>
    </DateCardContainer>
  );
}

export default DateCard;
