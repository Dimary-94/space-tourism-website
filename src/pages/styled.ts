import styled from '@emotion/styled';
import homeDesktop from "../images/home/background-home-desktop.jpg";
import homeTablet from "../images/home/background-home-tablet.jpg";
import homeMobile from "../images/home/background-home-mobile.jpg";
import destinationDesktop from "../images/destination/background-destination-desktop.jpg";
import destinationTablet from "../images/destination/background-destination-tablet.jpg";
import destinationMobile from "../images/destination/background-destination-mobile.jpg";
import crewDesktop from "../images/crew/background-crew-desktop.jpg";
import crewTablet from "../images/crew/background-crew-tablet.jpg";
import crewMobile from "../images/crew/background-crew-mobile.jpg";
import technologyDesktop from "../images/technology/background-technology-desktop.jpg";
import technologyTablet from "../images/technology/background-technology-tablet.jpg";
import technologyMobile from "../images/technology/background-technology-mobile.jpg";

export const HomeContainer = styled.div`
  background-image: url(${homeDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    background-image: url(${homeTablet});
  }

  @media (max-width: 575px) {
    background-image: url(${homeMobile});
  }
`;

export const DestinationContainer = styled.div`
  background-image: url(${destinationDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    background-image: url(${destinationTablet});
  }

  @media (max-width: 575px) {
    background-image: url(${destinationMobile});
  }
`;

export const CrewContainer = styled.div`
  background-image: url(${crewDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    background-image: url(${crewTablet});
  }

  @media (max-width: 575px) {
    background-image: url(${crewMobile});
  }
`;

export const TechnologyContainer = styled.div`
background-image: url(${technologyDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    background-image: url(${technologyTablet});
  }

  @media (max-width: 575px) {
    background-image: url(${technologyMobile});
  }
`;