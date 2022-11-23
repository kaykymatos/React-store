import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ProjectRoutes } from './routes';
import { LayoutPaginas } from './shared/layout';

export const App = () => {
  return (
    <Router>
      <LayoutPaginas>
        <ProjectRoutes />
      </LayoutPaginas>
    </Router>
  );
};
