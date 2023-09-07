import { Dispatch, memo, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import StaggerWrapper from '../../components/StaggerWrapper';
import { path } from '../../constants/path';
import useInnerNavigator from '../../hooks/useInnerNavigator';
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

const SHORT_QUESTION = {
  titles: ['그럼 너의 하루는 어땠어?'],
  type: 'short',
  subTitle: 'ex. 서핑, 산책, 등산, 카페에서 힐링',
};

interface Props {
  currentItem: QuestionType;
  currentStep: number;

  setSelects: Dispatch<SetStateAction<string[]>>;
  next: () => void;
}

const MAX_STEP = 4;

function Question({ currentItem, currentStep, setSelects, next }: Props) {
  const { push } = useInnerNavigator();

  const [inputValue, setInputValue] = useState('');
  const [isShort, setIsShort] = useState(false);

  const onNext = (value: string) => {
    if (value === '여기에는 없는 특별한 하루') {
      setIsShort(true);
      return;
    }
    if (currentStep === MAX_STEP) {
      setSelects((prev) => [...prev, value]);
      push(path.resultLoading);
      return;
    }
    next();
    setSelects((prev) => [...prev, value]);
  };

  const onShortNext = () => {
    if (inputValue === '') {
      alert('입력해주세요');
      return;
    }

    setSelects((prev) => [...prev, inputValue]);
    push(path.resultLoading);
  };

  return (
    <StaggerWrapper>
      <HeadingContainer>
        {currentItem.titles.map((title) => (
          <h1 className="b-24" key={title}>
            {title}
          </h1>
        ))}
        {isShort && SHORT_QUESTION?.subTitle && (
          <h2 className="r-16">{SHORT_QUESTION.subTitle}</h2>
        )}
      </HeadingContainer>
      <QuestionContainer>
        {currentItem.type === 'choice' &&
          !isShort &&
          currentItem.items.map((question) => (
            <QuestionItem
              className="b-20"
              key={question.id}
              onClick={() => onNext(question.title)}
            >
              {question.title}
            </QuestionItem>
          ))}

        {isShort && (
          <ShortContainer>
            <QuestionInputItem value={inputValue} onChange={setInputValue} />
            <button onClick={onShortNext}>다음</button>
          </ShortContainer>
        )}
      </QuestionContainer>
    </StaggerWrapper>
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

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 34px;
`;
