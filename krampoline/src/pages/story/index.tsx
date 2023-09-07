import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

import BottomLeftArrowButton from '../../components/BottomLeftArrowButton';
import PageContainer from '../../components/PageContainer';
import { defaultFadeInVariants } from '../../constants/motions';
import useStep from '../../hooks/useStep';
import basket from './basket.svg';

interface NextStage {
  title: string;
  contents: string[];
}

// type NextStageType = NextStage;

const NextStateContents: NextStage[] = [
  {
    title: '열심히 만들어 본 그물망이야',
    contents: ['아름다운 그물망에 너가 좋아하는 가게들을 마음껏 담아봐'],
  },
  {
    title: '이 아름다운 그물망에',
    contents: [
      '오늘은 제주가 착한 귤을 한가득 담아줄게',
      '제주 주변 착한 가게에서 귤에 이야기를 적어 보내왔어',
    ],
  },
  {
    title: '배고픈 너를 위한 착한 귤 이야기',
    contents: ['한번 들어볼래?'],
  },
];

// interface Props {
//   currentItem: NextStateContents;
//   currentStep: number;

//   next: () => void;
// }

function StoryPage() {
  const { currentStep, next } = useStep({
    initial: 0,
    max: 2,
  });

  return (
    <PageContainer>
      <Container>
        <SkipContainer>
          <SkipButton>
            <p className="r-16">skip</p>
          </SkipButton>
        </SkipContainer>
        <ImgWrapper
          variants={defaultFadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img alt="그물망" src={basket} />
        </ImgWrapper>
        <TextContainer>
          <HeadingContainer>
            <h1 className="b-24">{NextStateContents[currentStep].title}</h1>
          </HeadingContainer>
          <div>
            <p className="r-14">아름다운 그물망에 너가 좋아하는 가게들을 마음껏 담아봐</p>
          </div>
        </TextContainer>
        <BottomLeftArrowButton>다음</BottomLeftArrowButton>
      </Container>
    </PageContainer>
  );
}

const Container = styled.div`
  /* & > article { */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* } */
`;

const ImgWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25) inset;

  > img {
    width: 163.958px;
    height: 154.797px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-direction: column;
  margin-bottom: 28px;
`;

const TextContainer = styled.div`
  margin-top: 58px;
`;

const SkipButton = styled.button`
  outline: none;
  border: none;
  background: none;
  padding: 8px 16px;
  margin-right: 17px;

  > p {
    color: #656565;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const SkipContainer = styled.div`
  top: 62px;
  right: 8px;
  position: absolute;
  width: fit-content;
  height: fit-content;
`;

export default StoryPage;
