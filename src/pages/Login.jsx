import React, { useState } from 'react';

const Login = ({ user }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !pass) {
            setMensaje("Debe llenar todos los campos");
        } else if (email !== user.email) {
            setMensaje("Email incorrecto");
        } else if (pass !== user.pass) {
            setMensaje("Contraseña incorrecta");
        } else if (pass.length < 6) {
            setMensaje("La contraseña debe tener al menos 6 caracteres");
        } else {
            setMensaje(`Hola ${email}. Los datos son correctos!`);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese su email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <br />
                <label htmlFor="pass">Contraseña</label>
                <input
                    type="password"
                    id="pass"
                    name="pass"
                    placeholder="Ingrese su contraseña"
                    required
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                />
                <br />
                <br />
                <button style={{ border: "solid 2px black" }} type="submit">Iniciar Sesión</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </>
    );
};

export default Login;
