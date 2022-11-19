import { FooterSite, NavbarSite } from "../components"

interface ILayoutPaginasProps {
    children: React.ReactNode
}
export const LayoutPaginas: React.FC<ILayoutPaginasProps> = ({ children }) => {
    return (
        <>
            <NavbarSite />
            {children}
            <FooterSite/>
        </>
    )
}