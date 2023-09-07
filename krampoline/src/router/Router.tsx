import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
const staticServerUrl = process.env.REACT_APP_PATH || '';
import Layout from '../components/Layout';
import HomePage from '../pages/home';
function Paths() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={staticServerUrl + '/'}
          element={<Navigate to={staticServerUrl + '/home'} />}
        />
        <Route path={staticServerUrl + '/home'} element={<HomePage />} />
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
