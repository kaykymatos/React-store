import { FooterSite, NavbarSite } from '../components';
import './Layout.css';

interface ILayoutPaginasProps {
  children: React.ReactNode;
}
export const LayoutPaginas = ({ children }: ILayoutPaginasProps) => {
  return (
    <div className="background-site">
      <NavbarSite />
      {children}
      <FooterSite />
    </div>
  );
};
