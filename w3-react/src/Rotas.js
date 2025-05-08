import React from "react";
import{ BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const Sobre = () => <h2>Sobre</h2>;
const Contato = () => <h2>Contato</h2>;


const Routes = () => {
    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="sobre">Sobre</Link></li>
                    <li><Link to="contato">Contato</Link></li>
                </ul>
            </nav>
        </Router>
    );
}

export default Routes;