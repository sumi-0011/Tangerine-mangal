import { type } from 'os';
import { useState } from 'react';
import Typing from 'react-kr-typing-anim';
import { styled } from 'styled-components';

import PageContainer from '../../components/PageContainer';
import StaggerWrapper from '../../components/StaggerWrapper';
import TypingString from '../../components/TypingString';
import { path } from '../../constants/path';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import useStep from '../../hooks/useStep';
import Dots from './Dots';
import QuestionInputItem from './InputItem';

interface ChoiceQuestionType {
  titles: string[];
  type: 'choice';
  items: {
    id: number;
    title: string;
  }[];
}

interface ShortQuestionType {
  titles: string[];
  type: 'short';
  subTitle?: string;
}

type QuestionType = ChoiceQuestionType | ShortQuestionType;

const QUESTIONS: QuestionType[] = [
  {
    titles: ['나만의 맛집 사장님은', '어떤 사람이셨으면 좋겠어?'],
    type: 'choice',
    items: [
      {
        id: 1,
        title: '인심 가득한',
      },
      {
        id: 2,
        title: '손맛이 좋은',
      },
      {
        id: 3,
        title: '따로 있어!',
      },
    ],
  },
  {
    titles: ['나만의 식탁 주인공은', '누가 되었으면 좋겠어?'],
    type: 'choice',
    items: [
      {
        id: 1,
        title: '고품질의 고기3',
      },
      {
        id: 2,
        title: '다양한 채소류',
      },
      {
        id: 3,
        title: '싱싱한 수산물',
      },
      {
        id: 4,
        title: '따뜻한 공깃밥',
      },
    ],
  },
  {
    titles: ['나만의 식탁 주인공은22', '누가 되었으면 좋겠어?'],
    type: 'short',
    subTitle: 'ex. 간이 강하지 않게 해 주시는 사장님',
  },
];

function Question() {
  const { push } = useInnerNavigator();
  const { currentStep, next } = useStep({
    initial: 1,
    max: QUESTIONS.length,
  });

  const [inputValue, setInputValue] = useState('');
  const [selects, setSelects] = useState<string[]>([]);
  console.log('selects: ', selects);

  const onNext = (value: string) => {
    next();
    setSelects((prev) => [...prev, value]);
  };

  const onFinalNext = () => {
    if (inputValue === '') {
      alert('입력해주세요');
      return;
    }
    setSelects((prev) => [...prev, inputValue]);
    push(path.resultLoading);
  };

  const currentItem = QUESTIONS[currentStep - 1];

  return (
    <PageContainer>
      <Container>
        <Dots step={currentStep} len={QUESTIONS.length} />
        <StaggerWrapper>
          <ImageContainer>
            <DummyImage />
          </ImageContainer>
          <HeadingContainer>
            {currentItem.titles.map((title) => (
              <h1 className="b-24" key={title}>
                {title}
              </h1>
            ))}
            {currentItem.type === 'short' && currentItem?.subTitle && (
              <h2 className="b-16">{currentItem.subTitle}</h2>
            )}
          </HeadingContainer>
          <QuestionContainer>
            {currentItem.type === 'choice' &&
              currentItem.items.map((question) => (
                <QuestionItem key={question.id} onClick={() => onNext(question.title)}>
                  {question.title}
                </QuestionItem>
              ))}

            {currentItem.type === 'short' && (
              <ShortContainer>
                <QuestionInputItem value={inputValue} onChange={setInputValue} />
                <button onClick={onFinalNext}>다음</button>
              </ShortContainer>
            )}
          </QuestionContainer>
        </StaggerWrapper>
      </Container>
    </PageContainer>
  );
}

export default Question;

const ShortContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const QuestionItem = styled.div`
  padding: 20px 66px 20px 24px;
  width: fit-content;
  border-radius: 10px 10px 30px 10px;
  border: 1px solid var(--color-primary-orange-2, #b38800);
  cursor: pointer;
`;

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
