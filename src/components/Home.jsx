import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import Napo from '../assets/img/napo.jpg';
import Española from '../assets/img/española.jpg';
import Peperonni from '../assets/img/peperonni.jpg';

function Home() {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={Napo}
            />
          </div>
          <div className="col-12 col-md-4 mb-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={Española}
            />
          </div>
          <div className="col-12 col-md-4 mb-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={Peperonni}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
