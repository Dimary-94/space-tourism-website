import { Link as MuiLink } from '@mui/material';
import styled from 'styled-components';

type HeaderProps = {
  isMobileActive?: boolean;
};

export const StyledContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin: 40px 0 0 55px;

  @media (max-width: 1024px) {
    margin: 0 0 0 40px;
  }

  @media (max-width: 767px) {
    margin: 24px;
    display: flex;
    justify-content: space-between;

    .button {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  grid-template-columns: 48px 1fr;
  height: 48px;

  &:before {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIgZmlsbD0iI0ZGRiIvPjxwYXRoIGZpbGw9IiMwQjBEMTciIGQ9Ik0yNCAwYzAgMTYtOCAyNC0yNCAyNCAxNS43MTguMTE0IDIzLjcxOCA4LjExNCAyNCAyNCAwLTE2IDgtMjQgMjQtMjQtMTYgMC0yNC04LTI0LTI0eiIvPjwvZz48L3N2Zz4=");
    height: 48px;
  }

  @media (min-width: 1024px) {
    gap: 64px;

    span {
      height: 1px;
      background: var(--clr-white);
      opacity: 0.25;
      width: 100%;
      z-index: 1;
    }
  }
`;

export const WrapperLinks = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
  margin-left: -40px;
  padding: 30px 50px;

  @media (max-width: 767px) {
    padding: 30px;
    gap: 40px;
  }

  @media (max-width: 767px) {
    justify-content: unset;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    left: 150px;
    bottom: 0;
    z-index: 2;
    opacity: ${(props) => (!props.isMobileActive ? 0 : 1)};
    visibility: ${(props) => (!props.isMobileActive ? "hidden" : "visible")};
    transition: opacity 0.5s ease-in-out;
    padding: 90px 24px 0 24px;
  }
`;

export const Link = styled(MuiLink)`
  &.MuiLink-root {
    position: relative;
    font-family: var(--ff-sans-cond);
    font-size: var(--fs-200);
    color: var(--clr-white);
    text-transform: uppercase;
    letter-spacing: 4.72px;
    text-decoration: unset;

    @media (max-width: 767px) {
      font-size: var(--fs-300);
    }
  }

  span {
    margin-right: .2em;
    font-weight: 700;
    color: hsl( var(--clr-white) / .25);

    @media (min-width: 768px) {
      margin-right: .5em;
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50px;
    height: 3px;
    width: 100%;
    background: white;
    opacity: 0;

    @media (max-width: 767px) {
      right: -24px;
      top: 0;
      height: 100%;
      width: 3px;
    }
  }

  &:hover::after {
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
  }

  &.border {
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50px;
      height: 3px;
      width: 100%;
      background: white;
      opacity: 1;

      @media (max-width: 767px) {
        right: -24px;
        top: 0;
        height: 100%;
        width: 3px;
      }
    }
  }
`;
