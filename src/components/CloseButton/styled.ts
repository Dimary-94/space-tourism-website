import styled from "styled-components";

type CustomProps = {
  isActive?: boolean;
};

export const Button = styled.button<CustomProps>`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    outline: none;
    width: fit-content;
    height: fit-content;
    transition: background-color 0.5s ease;
    position: relative;
    cursor: pointer;
    padding: 0;
    z-index: 2;
  }

  .burger {
    position: absolute;
    filter: url(#gooeyness);
  }

  .x {
    transform: scale(0);
    transition: transform 400ms;
  }

  .line {
    fill: none;
    stroke: var(--clr-white);
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms;
  }

  .x .line {
    stroke-width: 6px;
  }

  .line2 {
    stroke-dasharray: 40 200;
    stroke-dashoffset: 0px;
  }

  .line3 {
    stroke-dasharray: 40 179;
    stroke-dashoffset: 0px;
  }

  // Active Button

  ${(props) => {
    if (props.isActive) {
      return `
      .burger .line {
        stroke-width: 3px;
      }
    
      .line {
        transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;
      }
      .line1 {
        transform: scale(0, 1);
        transition: transform 500ms 100ms;
      }
      .line2 {
        stroke-dasharray: 5px 200;
        stroke-dashoffset: -164px;
      }
      .line3 {
        stroke-dasharray: 5px 179;
        stroke-dashoffset: -142px;
      }
    
      .x {
        transform: scale(1);
        transition: transform 400ms 350ms;
      }
      `;
    }
    return null;
  }}
`;
