import React, { useState } from 'react';
import { pizzaCart } from '../helpers/data';

const Cart = () => {
  const [cart, setCart] = useState(
    pizzaCart.map(pizza => ({ ...pizza, cant: 0 }))
  );

  const incrementar = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, cant: item.cant + 1 } : item
    ));
  };

  const disminuir = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, cant: item.cant > 0 ? item.cant - 1 : 0 }
        : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.cant, 0);
  };

  const handlePayment = () => {
    alert('Procesando pago...');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carrito de Compras</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {cart.map(pizza => (
          <div key={pizza.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: 'auto', borderRadius: '8px' }} />
            <div>
              <h2>{pizza.name}</h2>
              <p>{pizza.desc}</p>
              <p><strong>Price:</strong> ${pizza.price}</p>
              <p><strong>Cantidad:</strong> {pizza.cant}</p>
              <button onClick={() => incrementar(pizza.id)} style={{ marginRight: '10px' }}>Aumentar</button>
              <button onClick={() => disminuir(pizza.id)}>Disminuir</button>
              {pizza.cant === 0 && <p>La cantidad es 0</p>}
            </div>
          </div>
        ))}
        <div>
          <h2>Total: ${calculateTotal() }</h2>
        </div>
        <button onClick={handlePayment} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
