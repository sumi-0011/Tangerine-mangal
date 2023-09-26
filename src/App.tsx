import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { path } from './constants/path';
import { staticServerUrl } from './constants/url';
import HomePage from './pages/home';
import OffBoardingPage from './pages/offboading';
import Question from './pages/question';
import RecommendPage from './pages/recommend';
import ResultLoadingPage from './pages/resultLoading';
import StartPage from './pages/start';
import StoryPage from './pages/story';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Container>
          <BrowserRouter>
            <InnerRouter />
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
}

export default App;

const InnerRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 단독 레이아웃 */}
        <Route path={staticServerUrl + '/'} element={<StartPage />}></Route>
        <Route path={staticServerUrl + '/home'} element={<HomePage />}></Route>
        <Route path={staticServerUrl + '/question'} element={<Question />}></Route>
        <Route path={staticServerUrl + '/story'} element={<StoryPage />}></Route>
        <Route path={staticServerUrl + '/recommend'} element={<RecommendPage />}></Route>
        <Route path={staticServerUrl + '/offboading'} element={<OffBoardingPage />} />
        <Route
          path={staticServerUrl + path.resultLoading}
          element={<ResultLoadingPage />}
        />
        <Route path="*" element={<div>Not Found...</div>} />
      </Routes>
    </AnimatePresence>
  );
};

const Container = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 475px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  text-align: left;
`;
