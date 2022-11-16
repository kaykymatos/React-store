import { Box } from "@mui/material"

interface ILayoutPaginasProps {
    children: React.ReactNode
}
export const LayoutPaginas: React.FC<ILayoutPaginasProps> = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    )
}