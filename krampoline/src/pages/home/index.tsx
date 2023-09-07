import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { instance } from '../../api';
import StaggerWrapper from '../../components/StaggerWrapper';
import TypingString from '../../components/TypingString';
import { staticServerUrl } from '../../constants/url';
import usePosition from '../../hooks/usePosition';

function HomePage() {
  const { position } = usePosition();

  // const [dbTest, setDbTest] = useState(false);
  const [apiTest, setApiTest] = useState(false);

  const handleApiOnclick = async () => {
    try {
      const data = await instance.post('/v1/test/', {
        lat: 1111,
        lng: 0.1918,
      });
      setApiTest(true);
      console.log('data: ', data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <TypingString>환영합니다!</TypingString>

        <Link to={staticServerUrl + '/login'}>로그인 페이지로 이동</Link>
        <button onClick={handleApiOnclick}>api test</button>
        <div>
          <StaggerWrapper>
            <p className="b-24">sad</p>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
            <p>sad</p>
          </StaggerWrapper>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
