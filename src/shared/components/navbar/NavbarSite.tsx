import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NavbarSite.css"

export const NavbarSite = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto lista_espacamento">
                    <Link to="/">Dashboard</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                </Nav>
            </Container>
        </Navbar>


    )
}