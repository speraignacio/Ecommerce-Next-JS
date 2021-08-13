import React from 'react'

export default function RegisterForm(props) {
    const {showLoginForm} = props;

    return (
        <div>
            <h2>Estamos en el formulario de Registro</h2>
            <button onClick={showLoginForm}>Ir al login</button>
        </div>
    )
}
