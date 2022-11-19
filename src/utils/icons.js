import { createElement } from 'react';
import * as Icons from '@mui/icons-material';

export function MyIcon({ name }) {
  return createElement(Icons[name]);
}
