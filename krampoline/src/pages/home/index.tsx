import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import TypingString from '../../components/TypingString';
import { defaultFadeInUpVariants } from '../../constants/motions';

const staticServerUrl = process.env.REACT_APP_PATH || '';

function HomePage() {
  return (
    <div>
      <div>
        <TypingString>환영합니다!</TypingString>

        <Link to={staticServerUrl + '/login'}>로그인 페이지로 이동</Link>
      </div>
    </div>
  );
}

export default HomePage;
