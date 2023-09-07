import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

import useInnerNavigator from '../../hooks/useInnerNavigator';
import ArrowIcon from './arrow_back_24px.svg';
import MainCircle from './main_circle.svg';
import Tangerine from './Tangerine.svg';

function StartPage() {
  const { push } = useInnerNavigator();

  const [isGo, setIsGo] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <MoveContainer isGo={isGo}>
          {/* <Link to={staticServerUrl + '/home'}>
            <p className="eb-16">Start page</p>
          </Link> */}
          <HeadingContainer>
            <img src={Tangerine} alt="Tangerine" />
            <h1>나의 제주,</h1>
            <h1>착한 감귤 나무</h1>
          </HeadingContainer>
          <Par2 className="eb-14">
            <p>&apos;청결 , 가격 뿐만 아니라 종업원 친절도&apos; 까지 </p>
            <p>전문 평가단이 직접 평가하고 인증한 </p>
            <p>맛집 정보 모음집</p>
          </Par2>
          <Par3>
            <p>서로 잊지 않고</p>
            <p>가슴 속에 깊이 품고 있으면</p>
            <p>사라지는 일은 결코 없단다</p>
          </Par3>
          <Par4 className="eb-12">- 나의 라임오렌지나무 중 -</Par4>
          <Par5>
            <p className="r-12">제주도의 착한 가격 식당을 경험해보세요</p>
          </Par5>

          <MainCircleContainer isGo={isGo}>
            <img src={MainCircle} alt="main circle" />
          </MainCircleContainer>
        </MoveContainer>
        <ButtonContainer
          className="b-16"
          onClick={() => {
            if (isGo) {
              push('/onboarding');
              return;
            }
            setIsGo(true);
          }}
        >
          Go!
          <img src={ArrowIcon} alt="arrow" />
        </ButtonContainer>
      </Container>
    </motion.div>
  );
}

export default StartPage;

const ButtonContainer = styled.div`
  border-radius: 8px;
  background: #ffa000;

  position: absolute;
  bottom: 57px;
  right: 35px;

  display: flex;
  align-items: center;
  gap: 11px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 170px;

  color: #302b1d;
  font-size: 36px;
  font-weight: 800;
  line-height: 40px; /* 111.111% */
  img {
    width: 64px;
    height: 64px;
  }
  z-index: 1;
`;

const MainCircleContainer = styled.div<{
  isGo: boolean;
}>`
  position: absolute;
  top: 108px;
  left: calc(260px - 42px);
  z-index: 0;
`;

const MoveContainer = styled(motion.div)<{
  isGo: boolean;
}>`
  background-color: #fff;
  width: calc(100% + 518px);
  height: 100vh;
  position: relative;

  ${(props) =>
    props.isGo &&
    `
    transform: translateX(-570px);
    transition: transform 1s ease-in-out;
 `}
`;

const Par2 = styled.div`
  position: absolute;
  bottom: 144px;
`;

const Par3 = styled.div`
  position: absolute;
  top: 200px;
  left: 572px;

  color: #302b1d;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px; /* 140% */
  z-index: 1;

  width: 210px;
`;

const Par4 = styled.div`
  position: absolute;
  top: 304px;
  left: 719px;
  width: 210px;
`;

const Par5 = styled.div`
  position: absolute;
  right: -94px;
  bottom: 0;
  top: 0;
  width: 100vw;
  text-align: center;

  @media screen and (min-width: 475px) {
    width: 475px;
  }
  p {
    position: absolute;
    bottom: 0;
    bottom: 172px;
    width: 100vw;
    text-align: center;

    @media screen and (min-width: 475px) {
      width: 475px;
    }
  }
  /* position: absolute;
  left: 604px;
  width: 310px; */
`;

const Container = styled.div`
  padding: 0 42px;
  height: 100vh;
  box-sizing: border-box;
`;
