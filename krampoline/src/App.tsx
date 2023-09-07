import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { instance } from './api.js';
import HomePage from './pages/home';

const staticServerUrl = process.env.REACT_APP_PATH || '';

function App() {
  // const [apiTest, setApiTest] = useState(false);
  // const [dbTest, setDbTest] = useState(false);

  // const handleApiOnclick = async () => {
  //   try {
  //     await instance.get('/test');
  //     setApiTest(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleDbOnClick = async () => {
  //   try {
  //     await instance.get('/db');
  //     setDbTest(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  console.log('staticServerUrl: ', staticServerUrl);

  return (
    <div className="App">
      <div className="layout">
        <Container>
          <BrowserRouter>
            <Routes>
              {/* 단독 레이아웃 */}
              <Route path={staticServerUrl + '/login'} element={<HomePage />}></Route>
              <Route path={staticServerUrl + '/'} element={<HomePage />}></Route>
              <Route path="*" element={<>Not Found...</>}></Route>
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
`;
