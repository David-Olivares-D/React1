
function CardPizza({ pizza }) {
  return (
    <div className="card" style={{ width: '18rem', border: "solid 2px gray" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <ul className="list-unstyled">
          {pizza.ingredients.map((ingredient) => (
            <li key={pizza.id}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-price">Precio: ${pizza.price}</p>
      </div>
    </div>
  );
}

export default CardPizza;