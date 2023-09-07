import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

import BottomLeftArrowButton from '../../components/BottomLeftArrowButton';
import PageContainer from '../../components/PageContainer';
import { defaultFadeInVariants } from '../../constants/motions';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import useStep from '../../hooks/useStep';
import basket from './basket.svg';
import basket2 from './basket-2.svg';
import nextIcon from './next.svg';
import rabong from './rabong.svg';

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

function StoryPage() {
  const { push } = useInnerNavigator();

  const { currentStep, next } = useStep({
    initial: 0,
    max: 2,
  });

  const onNext = () => {
    next();
  };

  const onNextPage = () => {
    push('/recommend');
  };

  return (
    <PageContainer>
      <Container>
        <SkipContainer>
          <SkipButton onClick={onNextPage}>
            <p className="r-16">skip</p>
          </SkipButton>
        </SkipContainer>
        <ImgWrapper
          variants={defaultFadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.img
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            key={currentStep === 0 ? 'basket' : 'basket2'}
            alt="그물망"
            src={currentStep === 0 ? basket : basket2}
          />
          {currentStep === 2 && (
            <motion.article
              variants={defaultFadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img src={rabong} alt="rabong" />
            </motion.article>
          )}
        </ImgWrapper>
        <TextContainer>
          <HeadingContainer>
            <h1 className="b-24">{NextStateContents[currentStep].title}</h1>
          </HeadingContainer>
          <SubContainer>
            <p className="r-14">
              {NextStateContents[currentStep].contents.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </p>
          </SubContainer>
        </TextContainer>
        {currentStep === 2 ? (
          <NextButton onClick={onNextPage}>
            <img src={nextIcon} alt="next" />
          </NextButton>
        ) : (
          <BottomLeftArrowButton onClick={onNext}>다음</BottomLeftArrowButton>
        )}
      </Container>
    </PageContainer>
  );
}

const NextButton = styled.button`
  outline: none;
  position: absolute;
  bottom: 158px;
  margin: auto;
  left: 0;
  right: 0;
  width: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

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

const SubContainer = styled.div`
  min-height: 42px;
`;
const ImgWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: #fff0bf;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25) inset;

  position: relative;
  > img {
    width: 163.958px;
    height: 154.797px;
  }
  & > article {
    position: absolute;
    bottom: -16px;
    right: -16px;
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
  cursor: pointer;
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
