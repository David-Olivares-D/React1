import React from 'react'
import logo from '../assets/img/img_pizza.jpg'
import '../assets/style.css'
import { formatoNumero } from '../utils/convertir';

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
        <div className="container">
        <a className="navbar-brand ms-2" href="#"><img src={logo} alt="Cuppon" className="cupon" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>Mamma Mia
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto ps-2">
            <a className="nav-item nav-link active" href=" ">Home</a>
                {
                    token ? (
                        <>
                        <a className="nav-item nav-link" href=" ">Profile</a>
                        <a className="nav-item nav-link" href=" ">Log out</a>
                        </>
                    ) : (
                        <>
                        <a className="nav-item nav-link" href=" ">Login</a>
                        <a className="nav-item nav-link" href="">Register</a>
                        </>
                    )
                }
                    <a className="nav-item nav-link disabled" href=""  aria-disabled="true">
                        <div>Total: ${formatoNumero(total)}</div>
                    </a>
            </div>
        </div>
        </div>
        </nav>
    );
    };

export default Navbar