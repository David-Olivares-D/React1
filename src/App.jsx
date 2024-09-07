import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './components/Profile'
import NotFound from './components/NotFound'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'           element={<Home />} />
        <Route path='/register'   element={<Register />} />
        <Route path='/login'      element={<Login />} />
        <Route path='/cart'       element={<Cart />} />
        <Route path='/profile'    element={<Profile />} />
        <Route path='/pizza/P001' element={<Pizza />} />
        <Route path='*'           element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

