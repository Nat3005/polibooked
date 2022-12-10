import React from 'react';
import { TabPanelContainer } from './CalendarElements';

function TabPanel({ children, value, index }) {
  if (value === index) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <TabPanelContainer>{children}</TabPanelContainer>;
  }
}

export default TabPanel;
