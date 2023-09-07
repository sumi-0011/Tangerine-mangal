import { useState } from 'react';
import styled from 'styled-components';

function StartPage() {
  const [isGo, setIsGo] = useState(false);
  console.log('isGo: ', isGo);

  return (
    <Container>
      <MoveContainer isGo={isGo}>StartPage</MoveContainer>
      <button onClick={() => setIsGo(true)}>Go!</button>
    </Container>
  );
}

export default StartPage;

const MoveContainer = styled.div<{
  isGo: boolean;
}>`
  width: 200vw;
  background: linear-gradient(to left, yellow, red);
  height: 100vh;

  ${(props) =>
    props.isGo &&
    `
    transform: translateX(-100vw);
    transition: transform 1s ease-in-out;
 `}
`;

const Container = styled.div`
  button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
