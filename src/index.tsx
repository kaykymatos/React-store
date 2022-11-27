import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { About, Car, Dashboard, Products } from './pages';
import { CarDetails } from './pages/CarDetails/CarDetails';
import { NotFoundRout } from './shared/components';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cars',
        element: <Car />,
      },
      {
        path: '/cars/:id',
        element: <CarDetails />,
      },
      {
        path: '*',
        element: <NotFoundRout />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
