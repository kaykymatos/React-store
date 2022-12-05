import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
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

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
