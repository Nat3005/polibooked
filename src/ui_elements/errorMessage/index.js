import React from 'react';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { ErrorMessageContainer } from './ErrorMessageElements';
import { SmallText } from '../text/TextElements';

function ErrorMessage({ message }) {
  return (
    <ErrorMessageContainer>
      <ErrorOutlineRoundedIcon />
      <SmallText>{message}</SmallText>
    </ErrorMessageContainer>
  );
}

export default ErrorMessage;
