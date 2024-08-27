import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';
import { useState } from 'react';
import Pizza from './components/Pizza';
// import Cart from './components/Cart';

function App() {
  // const [user, setUser] = useState(null);

  // const handleRegister = (userData) => {
  //   setUser(userData);
  // };

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* {!user ? (
        <Register registro={handleRegister} />
      ) : (
        <Login user={user} />
      )} */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer />
    </>
  );
}

export default App;

