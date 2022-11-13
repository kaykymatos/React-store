import { Navbar } from "../components"

interface ILayoutPaginasProps {
    children: React.ReactNode
}
export const LayoutPaginas: React.FC<ILayoutPaginasProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}