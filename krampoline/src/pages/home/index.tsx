import { motion } from 'framer-motion';

import TypingString from '../../components/TypingString';
import { defaultFadeInUpVariants } from '../../constants/motions';

function HomePage() {
  return (
    <div>
      <div>
        <TypingString>환영합니다!</TypingString>
      </div>
    </div>
  );
}

export default HomePage;
