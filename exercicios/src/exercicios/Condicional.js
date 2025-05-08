import React, { useState } from 'react';

const Condicional = () => {
  const [isLogado, setIsLogado] = useState(false);

  return (
    <div>
      {isLogado ? (
        <h1>Bem-vindo!</h1>
      ) : (
        <button onClick={() => setIsLogado(true)}>Login</button>
      )}
    </div>
  );
};

export default Condicional;