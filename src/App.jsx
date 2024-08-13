import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {!user ? (
        <Register registro={handleRegister} />
      ) : (
        <Login user={user} />
      )}
      <Footer />
    </>
  );
}

export default App;

