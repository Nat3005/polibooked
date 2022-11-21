import React from 'react';

function TabPanel({ children, value, index }) {
  if (value === index) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
}

export default TabPanel;
