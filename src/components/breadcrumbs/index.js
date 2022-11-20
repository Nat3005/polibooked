import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { SmallText } from '../text/TextElements';
import { BreadcrumbLink, ChevronRight } from './breadcrumbsElements';

function BreadcrumbsBar({ variant }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = decodeURI(location.pathname)
    .split('/')
    .filter((x) => x)

  if (variant === 'disabled') {
    return (
      <Breadcrumbs separator={<ChevronRight />} aria-label="breadcrumb">
        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <SmallText variant="purpleAccent" weight="bold">
              {name}
            </SmallText>
          ) : (
            <BreadcrumbLink>{name}</BreadcrumbLink>
          );
        })}
      </Breadcrumbs>
    );
  }
  return (
    <Breadcrumbs separator={<ChevronRight />} aria-label="breadcrumb">
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <SmallText variant="purpleAccent" weight="bold">
            {name}
          </SmallText>
        ) : (
          <BreadcrumbLink onClick={() => navigate(-index - 1)}>
            {name}
          </BreadcrumbLink>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsBar;
