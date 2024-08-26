import React from 'react'

const Pizza = ({ pizza }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <p className="card-text" style={{color : "black"}}>{pizza.ingredients.join("-")}</p>
        <a href="#" className="btn btn-primary">{pizza.price}</a>
      </div>
    </div>
  );
};

export default Pizza;