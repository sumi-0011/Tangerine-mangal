import { styled } from 'styled-components';

import Dots from './Dots';
import QuestionItem from './Item';

function Question() {
  return (
    <Container>
      <Dots />
      <ImageContainer>
        <DummyImage />
      </ImageContainer>
      <HeadingContainer>
        <h1 className="b-24">안녕 나는 춘식이야</h1>
        <h1 className="b-24">여기에 어떤 내용을 넣을까</h1>
      </HeadingContainer>
      <QuestionContainer>
        <QuestionItem>설문 항목 하나 둘 셋</QuestionItem>
        <QuestionItem>설문 항목 하나 둘 셋ㅁㅁㅁㅁㅁ</QuestionItem>
      </QuestionContainer>
    </Container>
  );
}

export default Question;

const ImageContainer = styled.div`
  margin: 47px auto 58px;
  text-align: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Container = styled.div`
  padding: 62px 36px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 34px;
`;

const DummyImage = () => {
  return (
    <svg
      width="228"
      height="228"
      viewBox="0 0 228 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_99_5062)">
        <circle cx="114" cy="114" r="110" fill="#FFA000" />
      </g>
      <defs>
        <filter
          id="filter0_f_99_5062"
          x="0"
          y="0"
          width="228"
          height="228"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_99_5062" />
        </filter>
      </defs>
    </svg>
  );
};