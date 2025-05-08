import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo); // Limpar o intervalo ao desmontar
  }, []);

  return <h1>{hora}</h1>;
};

export default Relogio;


//O useEffect é usado aqui para criar um relógio que 
// atualiza a cada segundo. O intervalo é limpo quando 
// o componente é desmontado para evitar vazamento de memória.