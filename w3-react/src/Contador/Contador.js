import React, { useState } from "react";
import logo from '../logo.svg';
import '../App.css';


const Contador = () => {
    const [contador, setContador] = useState(1);

    const incrementar = () => setContador(contador + 1);

    return (
        <div>
            <p>{contador}</p>
            <button onClick={incrementar}>Somar</button>
        </div>
    );
}

export default Contador;