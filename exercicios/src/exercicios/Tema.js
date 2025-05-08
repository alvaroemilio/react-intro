import React, { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('light');
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
};

const Componente = () => {
  const { tema, setTema } = useContext(TemaContext);
  return (
    <div>
      <h1>O tema atual é {tema}</h1>
      <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>
        Alternar Tema
      </button>
    </div>
  );
};

const Tema = () => (
  <TemaProvider>
    <Componente />
  </TemaProvider>
);

export default Tema;


//A Context API é usada para compartilhar o 
// estado tema em toda a árvore de componentes.
//  O valor do contexto pode ser acessado e 
// modificado através do useContext.