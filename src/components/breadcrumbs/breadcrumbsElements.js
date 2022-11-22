import styled from 'styled-components';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { SmallText } from '../text/TextElements';

export const ChevronRight = styled(ChevronRightRoundedIcon)`
  color: var(--primary-dark);
`;

export const BreadcrumbLink = styled(SmallText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: var(--primary-dark);
  cursor: pointer;
`;
