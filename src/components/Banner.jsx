import React from 'react'

function Banner() {
    let estilos = {backgroundColor : "red" , color: "white"}
  return (
    <div style={estilos}>
        <h1>Esto es un Banner</h1>
        <img  src="https://loremflickr.com/320/240" alt="" />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
)}

export default Banner