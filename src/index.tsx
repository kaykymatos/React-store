import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { About, Car, Dashboard, Products } from './pages';

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
        element:<Products/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/cars',
        element:<Car/>
      },
      {
        path:'*',
        element:<Navigate to='/'/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
