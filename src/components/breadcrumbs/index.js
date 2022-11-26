import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import { SmallText } from '../text/TextElements';
import { BreadcrumbLink, ChevronRight } from './breadcrumbsElements';

function BreadcrumbsBar({ variant, abbreviation, major }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = decodeURI(location.pathname)
    .split('/')
    .filter((x) => x);

  if (variant === 'disabled') {
    return (
      <Breadcrumbs separator={<ChevronRight />}>
        <BreadcrumbLink key="home">Home</BreadcrumbLink>
        <BreadcrumbLink key={abbreviation}>{abbreviation}</BreadcrumbLink>
        <BreadcrumbLink key={major}>{major}</BreadcrumbLink>
      </Breadcrumbs>
    );
  }
  return (
    <Breadcrumbs separator={<ChevronRight />}>
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;
        const breadcrumbName = name.charAt(0).toUpperCase() + name.slice(1);
        return isLast ? (
          <SmallText key={breadcrumbName} variant="purpleAccent" weight="bold">
            {breadcrumbName}
          </SmallText>
        ) : (
          <BreadcrumbLink
            key={breadcrumbName}
            onClick={() => navigate(1 + index - pathnames.length)}
          >
            {breadcrumbName}
          </BreadcrumbLink>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsBar;
