import React from 'react'
import { ErrorMessageContainer } from './ErrorMessageElements'
import { SmallText } from '../text/TextElements';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
function ErrorMessage({message}) {
  return (
    <ErrorMessageContainer>
        <ErrorOutlineRoundedIcon />
        <SmallText>
    {message}
        </SmallText>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage;
