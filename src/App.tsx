import { Outlet } from 'react-router-dom';
import './App.css';
import { LayoutPaginas } from './shared/layout';

export const App = () => {
  return (
    <LayoutPaginas>
      <Outlet />
    </LayoutPaginas>
  );
};
