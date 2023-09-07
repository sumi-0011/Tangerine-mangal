import { motion } from 'framer-motion';
import styled from 'styled-components';

import PageContainer from '../../components/PageContainer';
import { defaultFadeInVariants } from '../../constants/motions';
import basket from './basket.svg';

function StoryPage() {
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
            <h1 className="b-24">열심히 만들어 본 그물망이야</h1>
          </HeadingContainer>
          <div>
            <p className="r-14">아름다운 그물망에 너가 좋아하는 가게들을 마음껏 담아봐</p>
          </div>
        </TextContainer>
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
  margin-top: 114px;
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
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export default StoryPage;
