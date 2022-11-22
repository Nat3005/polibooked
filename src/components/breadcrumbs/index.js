import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import { SmallText } from '../text/TextElements';
import { BreadcrumbLink, ChevronRight } from './breadcrumbsElements';

function BreadcrumbsBar({ variant }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = decodeURI(location.pathname)
    .split('/')
    .filter((x) => x);

  if (variant === 'disabled') {
    return (
      <Breadcrumbs separator={<ChevronRight />}>
        {pathnames.map((name, index) => {
          const breadcrumbName = name.charAt(0).toUpperCase() + name.slice(1);
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <SmallText
              key={breadcrumbName}
              variant="purpleAccent"
              weight="bold"
            >
              {breadcrumbName}
            </SmallText>
          ) : (
            <BreadcrumbLink key={breadcrumbName}>
              {breadcrumbName}
            </BreadcrumbLink>
          );
        })}
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
            onClick={() => navigate(-(pathnames.length - 1) + index)}
          >
            {breadcrumbName}
          </BreadcrumbLink>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsBar;
