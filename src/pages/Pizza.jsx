import React, { useEffect, useState } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizzaInfo = async () => {
      const respuesta = await fetch("http://localhost:5000/api/pizzas/P001");
      const data = await respuesta.json();
      setPizza(data);
    };

    getPizzaInfo();
  }, []);

  return (
    pizza ? (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.desc}</p>
                <p className="card-text" style={{ color: "black" }}>
                  Ingredientes: {pizza.ingredients.join(" - ")}
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  Precio: ${pizza.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Pizza;