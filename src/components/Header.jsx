import React from 'react'
import logo from '../assets/img/pizza.jpg'

function Header() {
    let estilo_div = { position: "relative", textAlign: "center" , color: "white"}
    let image = { width: "100%", height: "300px", display: "black"}
    let content = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "black",  padding: "20px", borderRadius: "8px"}
  return (
    <div style={estilo_div}>
        <img style={image} src={logo} alt="Pizzeria Mamma Mia" className="header-image" />
        <div style={content}>
            <h1>¡Pizzeria Mamma Mia!</h1>
            <h5>Tenemos las mejores pizzas que podrás encontrar</h5>
        </div>
    </div>
  )
}

export default Header