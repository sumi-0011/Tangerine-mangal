import React from 'react';
import styled from 'styled-components';

import QuestionItem from './Item';

interface Props {
  value: string;
}

function QuestionInputItem({ value }: Props) {
  return <Container type="text" value={value} />;
}

export default QuestionInputItem;

const Container = styled.input`
  padding: 20px 66px 20px 24px;
  width: fit-content;
  border-radius: 10px 10px 30px 10px;
  border: 1px solid var(--color-primary-orange-2, #b38800);
`;
