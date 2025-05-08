import React from 'react';

const ListaDeFrutas = () => {
  const frutas = ['Maçã', 'Banana', 'Laranja'];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};

export default ListaDeFrutas;