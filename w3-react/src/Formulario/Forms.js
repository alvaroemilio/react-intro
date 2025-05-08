import React, { useState } from "react";
import logo from '../logo.svg';
import '../App.css';


const Forms = () => {
    const [nome, setNome] = useState('');
    const [saudacao, setSaudacao] = useState('');

    const handleSubimit = (e) => {
        e.preventDefault();
        setSaudacao (`Ola ${nome}!`);
    }

    return (

        <div>
            <form onSubmit={handleSubimit}>

                <input type ="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                />
                <button type="submit">Enviar!</button>
            </form>
        {
            saudacao && <h2>{saudacao}</h2>
        }
        </div>
    )

   
}

export default Forms;