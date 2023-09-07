import './App.css';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { instance } from './api.js';
import HomePage from './pages/home';
import StartPage from './pages/start';

const staticServerUrl = process.env.REACT_APP_PATH || '';

function App() {
  const [apiTest, setApiTest] = useState(false);

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
            <Routes>
              {/* 단독 레이아웃 */}
              <Route path={staticServerUrl + '/login'} element={<HomePage />}></Route>
              <Route path={staticServerUrl + '/'} element={<HomePage />}></Route>
              <Route path="*" element={<div>Not Found...</div>}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
}

export default App;

const Container = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 475px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  text-align: left;
`;
