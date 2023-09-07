import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useInnerNavigator from '../../hooks/useInnerNavigator';

function StartPage() {
  const { push } = useInnerNavigator();

  const [isGo, setIsGo] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <MoveContainer isGo={isGo}>
          <p className="eb-16">Start page</p>
        </MoveContainer>
        <button
          onClick={() => {
            if (isGo) {
              push('/login');
              return;
            }
            setIsGo(true);
          }}
        >
          Go!
        </button>
      </Container>
    </motion.div>
  );
}

export default StartPage;

const MoveContainer = styled(motion.div)<{
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
