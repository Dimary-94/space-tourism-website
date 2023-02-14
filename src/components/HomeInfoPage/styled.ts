import styled from 'styled-components';
import { Link as MuiLink } from '@mui/material';

export const Container = styled.div`
  padding: 0 24px;
  max-width: 1110px;
  grid-template-columns: 1fr 1fr;
  margin: 250px auto 130px auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 450px;
    gap: 120px;
    margin: 105px auto 90px auto;
  }

  @media (max-width: 767px) {
    gap: 80px;
    margin: 80px auto 40px auto;
  }
`;

export const Description = styled.div`
  @media (max-width: 1024px) {
    justify-items: center;
    text-align: center;
  }
`;

export const ExploreLink = styled(MuiLink)`
  &.MuiLink-root {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    justify-self: end;
    align-items: center;
    font-family: var(--ff-serif);
    font-size: var(--fs-600);
    border-radius: 50%;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 1);
    color: var(--clr-dark);
    width: 250px;
    height: 250px;

      &:after {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .1);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 500ms linear, transform 750ms ease-in-out;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: scale(1.5);
    }

    @media (max-width: 1024px) {
      justify-self: center;
      width: 200px;
      height: 200px;
    }

    @media (max-width: 767px) {
      font-size: var(--fs-400);
      width: 150px;
      height: 150px;
    }
  }
`;