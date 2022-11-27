import React from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import dayjs from 'dayjs';
import { SecondaryButton, TertiaryButton } from '../buttons/ButtonElements';
import { MediumText, SmallText } from '../text/TextElements';
import {
  BoxContainer,
  ButtonsContainer,
  DateCardContainer,
  TimeContainer,
} from './DateCardElements';

function DateCard({ startDate, endDate, type, onClick, status }) {
  return (
    <DateCardContainer onClick={onClick}>
      <SmallText variant="dark" weight="bold">
        {dayjs.unix(startDate.seconds).format('DD-MM-YYYY')}
      </SmallText>
      <BoxContainer status={status}>
        <TimeContainer>
          <MediumText variant="dark" weight="bold">
            {dayjs.unix(startDate.seconds).format('HH:mm')} -{' '}
            {dayjs.unix(endDate.seconds).format('HH:mm')}
          </MediumText>
        </TimeContainer>
        {type === 'editable' && (
          <ButtonsContainer>
            <TertiaryButton size="small" variant="dark">
              <EditRoundedIcon />
              Edytuj
            </TertiaryButton>
            <TertiaryButton size="small" variant="dark">
              <DeleteOutlineRoundedIcon> </DeleteOutlineRoundedIcon>Usuń
            </TertiaryButton>
          </ButtonsContainer>
        )}
      </BoxContainer>
    </DateCardContainer>
  );
}

export default DateCard;
