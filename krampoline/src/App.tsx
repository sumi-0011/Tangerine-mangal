import './App.css';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { instance } from './api.js';
import { staticServerUrl } from './constants/url';
import HomePage from './pages/home';
import Question from './pages/question';
import StartPage from './pages/start';

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
        <Route path={staticServerUrl + '/login'} element={<HomePage />}></Route>
        <Route path={staticServerUrl + '/question'} element={<Question />}></Route>
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
