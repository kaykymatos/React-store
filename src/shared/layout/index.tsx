import { Container } from "react-bootstrap"
import { NavbarSite } from "../components"

interface ILayoutPaginasProps {
    children: React.ReactNode
}
export const LayoutPaginas: React.FC<ILayoutPaginasProps> = ({ children }) => {
    return (
        <Container fluid>
            {children}
            </Container>
    )
}