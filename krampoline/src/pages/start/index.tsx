import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

import { defaultFadeInUpVariants } from '../../constants/motions';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import ArrowIcon from './arrow_back_24px.svg';
import BigRabong from './big-rabong.svg';
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
            {/* <img src={Tangerine} alt="Tangerine" /> */}
            <h1>나의 제주,</h1>
            <h1>착한 감귤 나무</h1>
          </HeadingContainer>
          <Par2 className="eb-14">
            <p>&apos;청결 , 가격 뿐만 아니라 종업원 친절도&apos; 까지 </p>
            <p>전문 평가단이 직접 평가하고 인증한 </p>
            <p>맛집 정보 모음집</p>
          </Par2>
          <Par3>
            <p>“귤망 하다”</p>
            <p>가성비를 무시할 정도로 </p>
            <p>맛있고, 또 찾고 싶어지다</p>
          </Par3>
          <Par4 className="eb-12">- 7기 구름톤 기록 어딘가 -</Par4>

          <MainRaBong>
            <img src={BigRabong} alt="big rabong" />
          </MainRaBong>
        </MoveContainer>
        {isGo ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
            exit={{ opacity: 0 }}
          >
            <GoButton onClick={() => push('/onboarding')}>시작하기</GoButton>
          </motion.div>
        ) : (
          <ButtonContainer
            className="b-16"
            onClick={() => {
              setIsGo(true);
            }}
          >
            Go!
            <img src={ArrowIcon} alt="arrow" />
          </ButtonContainer>
        )}
      </Container>
      {isGo && (
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: 0, transition: { delay: 0.4, duration: 0.4 } }}
          exit={{ y: 0 }}
        >
          <BottomPopUp className="b-14">
            <p>저 구르미와 함께</p>
            <p>제주도의 착한 가격 식당을 경험해봐요</p>

            <img
              src={require('./groom_with_shadow.png')}
              alt="main circle"
              width={90}
              height={77.32}
            />
          </BottomPopUp>
        </motion.div>
      )}
    </motion.div>
  );
}

export default StartPage;

const BottomPopUp = styled.div`
  position: absolute;
  bottom: 0;
  background: #fff0bf;
  height: 110px;
  width: 100%;

  padding: 28px 37px;
  box-sizing: border-box;

  img {
    position: absolute;
    bottom: 46px;
    right: 37px;
  }
`;

const GoButton = styled.button`
  position: absolute;
  bottom: 150px;
  right: 34px;

  background-color: #ffa000;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  font-size: 22.456px;
  font-weight: 700;
  line-height: 28.07px; /* 125% */
`;

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
  padding-top: 116px;

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

const MainRaBong = styled.div`
  position: absolute;
  top: 156px;
  z-index: 0;
  left: 136px;
`;

const MoveContainer = styled(motion.div)<{
  isGo: boolean;
}>`
  background-color: #fff;
  width: calc(100% + 218px);
  height: 100vh;
  position: relative;

  ${(props) =>
    props.isGo &&
    `
    transform: translateX(-320px);
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
  left: 412px;

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
  left: 490px;
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
