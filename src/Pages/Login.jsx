import React from 'react'
import { useState } from 'react';
import './Login.css';
import { Registro } from './Registro';


export const Login = () => {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

const handleSubmit = (e) => {
e.preventDefault()
    if(nombre == ""|| password == ""){
        setError(true)
        return

    }

}


   

  return (




    <div className='login'>
        <h1>Login </h1>
        <form className="Formulario" onSubmit={handleSubmit}>
            <a>Nombre de usuario</a>
        <input type="text" 
        value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Usuario' />
        <a>Contraseña </a>
        <input type="password" 
        value={password} onChange={e => setPassword(e.target.value)} 
        
        placeholder='Contraseña'/>
        <button type='submit'>Ingresar</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
        <Registro/>
    </div>
  
  )
}

