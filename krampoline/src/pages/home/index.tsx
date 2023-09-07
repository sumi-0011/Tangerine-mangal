import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import StaggerWrapper from '../../components/StaggerWrapper';
import TypingString from '../../components/TypingString';
import { staticServerUrl } from '../../constants/url';
import usePosition from '../../hooks/usePosition';

function HomePage() {
  const { position } = usePosition();

  console.log('position: ', position);

  return (
    <div>
      <div>
        <TypingString>환영합니다!</TypingString>

        <Link to={staticServerUrl + '/login'}>로그인 페이지로 이동</Link>

        <div>
          <StaggerWrapper>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
          </StaggerWrapper>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
