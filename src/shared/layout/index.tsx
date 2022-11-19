import { FooterSite, NavbarSite } from "../components"
import "./Layout.css"

interface ILayoutPaginasProps {
    children: React.ReactNode
}
export const LayoutPaginas: React.FC<ILayoutPaginasProps> = ({ children }) => {
    return (
        <div className="background-site">
            <NavbarSite />
            {children}
            <FooterSite/>
        </div>
    )
}