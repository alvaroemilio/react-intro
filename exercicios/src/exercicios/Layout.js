import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Pagina Inical</Link>
          </li>
          <li>
            <Link to="/saudacao">Saudação</Link>
          </li>
          <li>
            <Link to="/props">Uso De Props</Link>
          </li>
          <li>
            <Link to="/contador">Contador Incrementar</Link>
          </li>
          <li>
            <Link to="/relogio">Relogio Convertido</Link>
          </li>
          <li>
            <Link to="/saudacaoclasse">Passando Por Classes</Link>
          </li>
          <li>
            <Link to="/listadefrutas">Lista De Frutas</Link>
          </li>
          <li>
            <Link to="/formulario">Formulário</Link>
          </li>
          <li>
            <Link to="/condicional">Condicional Estado LogIn LogOff</Link>
          </li>
          <li>
            <Link to="/condicional">Condicional</Link>
          </li>
          <li>
            <Link to="/funcaoviaprops">Passar Funções Via Props</Link>
          </li>
          <li>
            <Link to="/tema">Mudar Tema</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;