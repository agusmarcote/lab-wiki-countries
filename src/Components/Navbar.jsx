import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink>
            <p>LAB - WikiCountries</p>
            <NavLink to='/countries'>CountriesList</NavLink>
        </nav>
    );
}

export default Navbar;
