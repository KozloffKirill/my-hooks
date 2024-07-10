import HomePage from '@pages/home';
import HooksPage from '@pages/hooks';
import RootPage from '@pages/root';
import { FC } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="hooks" element={<HooksPage />} />
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
