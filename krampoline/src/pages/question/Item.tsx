import { PropsWithChildren } from 'react';
import styled from 'styled-components';

function QuestionItem({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

export default QuestionItem;

const Container = styled.div`
  padding: 20px 66px 20px 24px;
  width: fit-content;
  border-radius: 10px 10px 30px 10px;
  border: 1px solid var(--color-primary-orange-2, #b38800);
`;
