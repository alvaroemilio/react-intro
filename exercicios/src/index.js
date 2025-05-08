import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./exercicios/Layout";
import Saudacao from "./exercicios/Saudacao";
import Home from "./exercicios/Home";
import Props from "./exercicios/Props";
import Contador from "./exercicios/Contador";
import Relogio from "./exercicios/Relogio";
import Saudacaoclasse from "./exercicios/Saudacaoclasse";
import ListaDeFrutas from "./exercicios/ListaDeFrutas";
import Formulario from "./exercicios/Formulario";
import Condicional from "./exercicios/Condicional";
import Funcaoviaprops from "./exercicios/Funcoesviaprops";
import Tema from "./exercicios/Tema";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="saudacao" element={<Saudacao />} />
        <Route path="props" element={<Props nome="Álvaro Emílio Alves Rodrigues" />} />
        <Route path="contador" element={<Contador />} />
        <Route path="relogio" element={<Relogio />} /> 
        <Route path="saudacaoclasse" element={<Saudacaoclasse />} />
        <Route path="listadefrutas" element={<ListaDeFrutas />} />
        <Route path="formulario" element={<Formulario />} /> 
        <Route path="condicional" element={<Condicional />} />   
        <Route path="funcaoviaprops" element={<Funcaoviaprops />} />
        <Route path="tema" element={<Tema />} />  

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


