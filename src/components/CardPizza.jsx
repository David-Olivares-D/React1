import React from 'react';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt={`${name} pizza`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Ingredientes: {ingredients.join(', ')}
        </p>
        <h6 className="card-subtitle mb-2 text-muted">Precio: ${price}</h6>
      </div>
    </div>
  );
}


export default CardPizza;