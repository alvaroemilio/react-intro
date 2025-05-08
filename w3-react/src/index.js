import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './RenderInicial/App';
import Nome from './MostrarNome/Nome';
import Contador from './Contador/Contador';
import Forms from './Formulario/Forms';
import Tarefas from './ListaTarefas/Tarefas';
import Login from './Logar/Login';
//import Routes from './Rotas'; // rotas - importar routes arquivos

import reportWebVitals from './reportWebVitals';

// RENDERIZANDO APP.JS -> BASIC REACT EXAMPLE
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);

// RENDERIZANDO EXIBIÇÃO DE NOME EM TELA
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Nome />);

// RENDERIZANDO CONTADOR COM USE STATE
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Contador />);

// RENDERIZANDO FORMULARIO NA TELA
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Forms />);

// RENDERIZANDO LISTA DE TAREFAS EM TELA
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Tarefas />);

// RENDERIZANDO LISTA DE TAREFAS EM TELA
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Tarefas />);

// RENDERIZANDO LOGIN E LOGOUT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);

// ROUTES
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Routes />);

reportWebVitals();
