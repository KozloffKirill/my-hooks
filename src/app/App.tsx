import { Main } from '@widgets/main';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'hooks',
    element: 'Hooks',
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
