import React, { useEffect, useState } from "react";
import * as S from './styled';
import { CloseButton } from "../CloseButton/CloseButton";
import { useLocation } from "react-router-dom";

const MOCK_DATA = [
  {
    number: '01',
    label: 'Home',
    link: '/',
  },
  {
    number: '02',
    label: 'Destination',
    link: '/destination',
  },
  {
    number: '03',
    label: 'Crew',
    link: '/crew',
  },
  {
    number: '04',
    label: 'Technology',
    link: '/technology',
  }
];

export const MenuList = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const location = useLocation();
  const mobileNavHandler = (element: boolean) => {
    setMobileNav(element);
  };

  useEffect(() => {
    mobileNav
      ? document.body.classList.add("is-hidden")
      : document.body.classList.remove("is-hidden");
  }, [mobileNav]);

  return (
    <S.StyledContainer className='grid'>
      <S.Logo className='grid'>
        <span></span>
      </S.Logo>
      <S.WrapperLinks isMobileActive={mobileNav}>
        {MOCK_DATA.map(({ number, label, link }, key) => (
          <S.Link key={key} href={link} className={location.pathname === link ? 'border' : ''}>
            <span>{number}</span>{label}
          </S.Link>
        ))
        }
      </S.WrapperLinks>
      <CloseButton
        isMobileActive={mobileNav}
        mobileNav={mobileNavHandler}
      />
    </S.StyledContainer>
  );
};
