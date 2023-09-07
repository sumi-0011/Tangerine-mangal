import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomLeftArrowButton from '../../components/BottomLeftArrowButton';
import PageContainer from '../../components/PageContainer';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import Dots from '../question/Dots';
import MainCircle from './main_circle.svg';

function OnboardingPage() {
  const { push } = useInnerNavigator();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -10 }}
    >
      <Container>
        <Dots step={1} len={4} />
        <Box1 />
        <HeadingContainer>
          <h1>설문제목, 몰루</h1>
          <article className="r-14">
            <p>우리는 이런걸 수집해요!</p>
            <p> 정보를 주시면 이렇게 이렇게 합니다</p>
            <p> 그래서 이렇게 이렇게 해드릴께요</p>
          </article>
          <article className="r-14">
            <p>우리는 이런걸 수집해요!</p>
            <p> 정보를 주시면 이렇게 이렇게 합니다</p>
            <p> 그래서 이렇게 이렇게 해드릴께요</p>
          </article>
        </HeadingContainer>
        <MainCircleContainer>
          <img src={MainCircle} alt="main circle" />
        </MainCircleContainer>
        <BottomLeftArrowButton onClick={() => push('/question')}>
          진행하기
        </BottomLeftArrowButton>
      </Container>
    </motion.div>
  );
}

export default OnboardingPage;

const Container = styled.div`
  padding: 62px 36px;
`;

const MainCircleContainer = styled.div`
  position: absolute;

  bottom: -140px;
  left: -216px;
`;

const HeadingContainer = styled.div`
  /* position: absolute;
  top: 317px; */
  padding-top: 245px;
  padding-left: 26px;
  z-index: 1;
  position: relative;
  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 55.556% */
    margin-bottom: 64px;
  }

  & > article {
    margin-bottom: 24px;
  }
`;

const Box1 = styled.div`
  position: absolute;
  background-color: #fff0bf;
  width: 390px;
  height: 220px;
  position: absolute;
  right: -108px;
  top: 120px;
  z-index: 0;
`;
