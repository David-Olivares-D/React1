import React, { useState } from 'react';

const Register = ({ registro }) => {
    const [nombre, setNombre] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleNombre = (event) => {
        setNombre(event.target.value);
    };

    const handlePass = (event) => {
        setPass(event.target.value);
    };

    const handleConfirm = (event) => {
        setConfirm(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass !== confirm) {
            setMensaje("Las contraseñas deben ser iguales");
        } else if (!nombre || !pass || !confirm) {
            setMensaje("Debe llenar todos los campos");
        } else if (pass.length < 6) {
            setMensaje("La contraseña debe tener al menos 6 caracteres");
        } else {
            setMensaje(`Hola ${nombre}. Registro exitoso!`);
            registro({ email: nombre, pass });
        }
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Su nombre + @gmail.com"
                    required
                    onChange={handleNombre}
                    value={nombre}
                />
                <br />
                <br />
                <label htmlFor="pass">Contraseña</label>
                <input
                    type="password"
                    id="pass"
                    name="pass"
                    placeholder="Ingrese una contraseña"
                    required
                    onChange={handlePass}
                    value={pass}
                />
                <br />
                <br />
                <label htmlFor="confirm">Confirmar Contraseña</label>
                <input
                    type="password"
                    id="confirm"
                    name="confirm"
                    placeholder="Confirme su contraseña"
                    required
                    onChange={handleConfirm}
                    value={confirm}
                />
                <br />
                <br />
                <button style={{ border: "solid 2px black" }} type="submit">
                    Enviar
                </button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </>
    );
};

export default Register;