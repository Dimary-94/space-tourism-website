import styled from '@emotion/styled';

type Disableable = Record<'disabled', boolean | undefined>;

export const Button = styled.button<Disableable>`
  &.rating-button {
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border: unset;
    border-radius: 50%;
    outline: unset;
    height: 65px;
    width: 65px;
    color: #ccc;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.3);
    }

    &.on {
      background-color: #FB7718;
      color: #fff;
    }

    ${({ disabled }) =>
    disabled &&
    `&.off {
        background-color: rgba(255, 255, 255, 0.3);
        color: #ccc;
      }
    `};
  }

  &.submit-button {
    display: block;
    font-size: 18px;
    text-transform: uppercase;
    border: 0px;
    border-radius: 30px;
    padding: 15px;
    width: 100%;

    ${({ disabled }) =>
    !disabled &&
    `
      color: #fff;
      background: #FB7718;
      outline: unset;

      &:hover {
        color: #FB7718;
        cursor: pointer;
        background: #fff;
        outline: 2px solid #FB7718;
      }`
  };
  }
`;