import { ComponentProps } from 'react';
import styled from 'styled-components';

import ArrowIcon from './arrow_left.svg';

type Props = ComponentProps<'button'>;

function BottomLeftArrowButton({ ...props }: Props) {
  return (
    <Button {...props} className="b-16">
      <img src={ArrowIcon} alt="arrow" />
      {props.children}
    </Button>
  );
}

export default BottomLeftArrowButton;

const Button = styled.button`
  position: absolute;
  bottom: 57px;
  left: 35px;

  display: flex;
  align-items: center;
  gap: 11px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
