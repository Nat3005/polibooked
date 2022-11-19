import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { SmallText } from '../text/TextElements';
import { BreadcrumbLink, ChevronRight } from './breadcrumbsElements';

function BreadcrumbsBar({ variant }) {
  const location = useLocation();
  // console.log({location});
  // console.log(`szandala = ${decodeURI(location.pathname)}`)
  const navigate = useNavigate();
  const pathnames = decodeURI(location.pathname)
    .split('/')
    .filter((x) => x)
    .slice(1);
  // console.log(pathnames);
  // const refactorName = (name) => {
  //     name=name.replace(/%20/g,' '); //spacja
  //     console.log(name);
  //     name=name.replace(/%C4%99/g,'ę'); //ę
  //     name=name.replace(/%C3%B3/g,'ó'); //ó
  //     name=name.replace(/%C5%BC/g,'ż'); //ż
  //     name=name.replace(/%C5%BB/g,'Ż'); //Ż
  //     name=name.replace(/%C5%82/g,'ł'); //ł
  //     name=name.replace(/%C5%81/g,'Ł'); //Ł
  //     name=name.replace(/%C4%87/g,'ć'); //ć
  //     name=name.replace(/%C4%86/g,'Ć'); //Ć
  //     name=name.replace(/%C5%9B/g,'ś'); //ś
  //     name=name.replace(/%C5%9A/g,'Ś'); //Ś
  //     name=name.replace(/%C5%BA/g,'ź'); //ź
  //     name=name.replace(/%C5%B9/g,'Ź'); //Ź
  //     name=name.replace(/%C5%84/g,'ń'); //ń
  //     name=name.replace(/%C5%83/g,'Ń'); //Ń

  //     return name;
  // }

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
      <BreadcrumbLink onClick={() => navigate('/homepage')}>
        <ApartmentRoundedIcon />
        Home
      </BreadcrumbLink>
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
