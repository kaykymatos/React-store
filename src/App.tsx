import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ProjectRoutes } from './routes';
import { NavbarSite } from './shared/components';
import { LayoutPaginas } from './shared/layout';

export const App = () => {
  return (
      <Router>
        <NavbarSite />
        <LayoutPaginas>
          <ProjectRoutes />
        </LayoutPaginas>
      </Router>

  );
}
