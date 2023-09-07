import './App.css';

import { useEffect, useState } from 'react';

import { instance } from './api.js';
import { defaultFadeInUpVariants } from './constants/motions';
import HomePage from './pages/home';
import Router from './router/Router';

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

  return (
    <div className="App">
		<div className="layout">
			<BrowserRouter>
				<Routes>
					{/* 단독 레이아웃 */}
					<Route path={staticServerUrl + "/login"} element={<HomePage />}></Route>					
					<Route path={staticServerUrl + "/"} element={<HomePage />}></Route>					
				</Routes>
			</BrowserRouter>
		</div>
      
    </div>
  );
}

export default App;
