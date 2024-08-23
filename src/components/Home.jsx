import Header from './Header';
import CardPizza from './CardPizza';
import arrayPizzas from '../utils/pizzas';

function Home() {
  return (
    <>
      <Header />
      <div style={{display: "flex", flexwrap: "wrap", gap: "10px", justifyContent: "center", border: "solid 2px black"}}>
        {arrayPizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
}

export default Home;


// Recorrer el archivo y hacer 1 "cardpizza" por cada pizza
