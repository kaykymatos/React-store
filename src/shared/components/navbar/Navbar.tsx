import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/products">Products</Link></li>
                    <li>

                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}