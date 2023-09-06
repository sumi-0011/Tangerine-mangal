import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from '../pages/home';
function Paths() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={'/'} element={<Navigate to={'/home'} />} />
        <Route path={'/home'} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}

export default Router;
