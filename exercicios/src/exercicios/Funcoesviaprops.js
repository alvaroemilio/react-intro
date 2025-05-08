import React from 'react';

const Botao = ({ onClick }) => {
  return <button onClick={onClick}>Clique aqui</button>;
};

const Funcaoviaprops = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return <Botao onClick={handleClick} />;
};

export default Funcaoviaprops;


//A função handleClick é passada como prop 
// para o componente Botao, que a chama 
// quando o botão é clicado.