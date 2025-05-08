import { useState } from "react";
import ReactDOM from "react-dom/client";

const Carros = () => {
  function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return (
      <>
        <h1>Minha {brand}</h1>
        <p>
          Tem a cor {color} e o modelo {model} do ano {year}.
        </p>
      </>
    );
  }

  return (
    <div>
      <Car /> {/* Aqui estamos chamando o componente Car */}
    </div>
  );
};

export default Carros;
