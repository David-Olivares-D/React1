import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/img_pizza.jpg';
import '../assets/style.css';
import { formatoNumero } from '../utils/convertir';

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
            <div className="container">
                <Link className="navbar-brand ms-2" to="/">
                    <img src={logo} alt="Cuppon" className="cupon" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                Mamma Mia
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ps-2">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/cart">Cart</Link>
                        {
                            token ? (
                                <>
                                    <Link className="nav-item nav-link" to="/profile">Profile</Link>
                                    <Link className="nav-item nav-link" to="/logout">Log out</Link>
                                </>
                            ) : (
                                <>
                                    <Link className="nav-item nav-link" to="/login">Login</Link>
                                    <Link className="nav-item nav-link" to="/register">Register</Link>
                                </>
                            )
                        }
                        <Link className="nav-item nav-link" to="/cart">
                            <i className="fas fa-shopping-cart"></i> Total: ${formatoNumero(total)}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;