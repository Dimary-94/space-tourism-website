import * as S from './styled';

export const HomeInfo = () => {

  return (
    <S.Container className='grid'>
      <S.Description className='grid'>
        <h1 className='uppercase'>Space</h1>
        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </S.Description>

      <S.ExploreLink href={'/destination'} className={"uppercase"}>
        Explore
      </S.ExploreLink>
    </S.Container>
  );
};
