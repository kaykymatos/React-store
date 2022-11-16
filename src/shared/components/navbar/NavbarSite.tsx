import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NavbarSite.css"

export const NavbarSite = () => {
    const [activeMenu, setActiveMenu] = useState('')
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto lista_espacamento">
                    <Link to="/"
                        id="dashboard"
                        className={activeMenu === 'dashboard' || activeMenu === '' ? 'active nav-link' : 'nav-link'}
                        onClick={() => { setActiveMenu('dashboard') }}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/products"
                        id="products"
                        className={activeMenu === 'products' ? 'active nav-link' : 'nav-link'}
                        onClick={() => { setActiveMenu('products') }}
                    >
                        Products
                    </Link>

                    <Link
                        to="/about"
                        id="about"
                        className={activeMenu === 'about' ? 'active nav-link' : 'nav-link'}
                        onClick={() => { setActiveMenu('about') }}
                    >
                        About
                    </Link>
                </Nav>
            </Container>
        </Navbar>


    )
}