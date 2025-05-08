import React, { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Nome: ' + nome);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

//O estado do formulário é controlado pelo useState, 
// e o valor do input é vinculado ao estado. 
// O formulário é enviado com um evento onSubmit.