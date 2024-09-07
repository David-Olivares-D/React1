import Header from '../components/Header';
// import CardPizza from './CardPizza';
// import arrayPizzas from '../utils/pizzas';
import React, { useEffect, useState } from 'react';
// import Pizza from './Pizza'

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
      <div className="container">
      <div className="row">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.desc}</p>
                <p className="card-text" style={{ color: "black" }}>{pizza.ingredients.join(" - ")}</p>
                <a href="#" className="btn btn-primary">${pizza.price}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;