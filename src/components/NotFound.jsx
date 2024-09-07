import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">¡Página no encontrada!</p>
      <p>
        <Link to="/" className="not-found-link">Volver a la página principal</Link>
      </p>
    </div>
  );
};

export default NotFound;