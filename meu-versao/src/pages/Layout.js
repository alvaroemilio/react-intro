import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/NoPage">NoPage</Link>
          </li>
          <li>
            <Link to="/Tarefas">Tarefas</Link>
          </li>
          <li>
            <Link to="/Carros">Carros</Link>
          </li>
          <li>
            <Link to="/Cores">Cores</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;