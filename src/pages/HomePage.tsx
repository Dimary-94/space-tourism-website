import * as S from "../pages/styled";
import { MenuList } from "../components/MenuList/MenuList";
import { HomeInfo } from "../components/HomeInfoPage/HomeInfo";

const HomePage = () => {
  return (
    <S.HomeContainer>
      <MenuList />
      <HomeInfo />
    </S.HomeContainer>
  );
};

export default HomePage;