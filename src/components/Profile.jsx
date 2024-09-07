import '../App.css';


const Profile = () => {
  const handleLogout = () => {
    alert('Cerrar sesión no está implementado todavía.');
  };

  return (
    <div className="profile-container">
      <h1>Perfil del Usuario</h1>
      <p>Email: usuario@example.com</p>
      <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;