import './App.css';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { instance } from './api.js';
import { path } from './constants/path';
import { staticServerUrl } from './constants/url';
import HomePage from './pages/home';
import OnboardingPage from './pages/onboarding';
import Question from './pages/question';
import ResultLoadingPage from './pages/resultLoading';
import StartPage from './pages/start';
import StoryPage from './pages/story';

function App() {
  // const handleDbOnClick = async () => {
  //   try {
  //     await instance.get('/db');
  //     setDbTest(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
        <Route
          path={staticServerUrl + '/onboarding'}
          element={<OnboardingPage />}
        ></Route>
        <Route
          path={staticServerUrl + path.resultLoading}
          element={<ResultLoadingPage />}
        ></Route>
        <Route path="*" element={<div>Not Found...</div>}></Route>
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
