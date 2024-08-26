import Header from './Header';
// import CardPizza from './CardPizza';
// import arrayPizzas from '../utils/pizzas';
import React, { useEffect, useState } from 'react';
import Pizza from './Pizza'

function Home() {
  const [pizzas, setPizzas] = useState([])

  const getInfo = async () => {
    const respuesta = await fetch ("http://localhost:5000/api/pizzas")
    const data = await respuesta.json()
    console.log (data)
    setPizzas(data)
  }

  useEffect (() =>{
    getInfo ()
  }, [])

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", border: "solid 2px black" }}>
        {pizzas.map(pizza => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
}

export default Home;
