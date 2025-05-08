import React, { createContext, useState, useContext } from "react";
import logo from '../logo.svg';
import '../App.css';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [autenticado, setAutenticado] = useState(false);

    const login = () => setAutenticado(true);
    const logout = () => setAutenticado(false);

    return (
        <AuthContext.Provider value={{ autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

const Usuario = () => {
    const { autenticado, login, logout } = useAuth();

    return (
        <div>
            {autenticado ? (
                <>
                    <h1>Bem-vindo de volta!</h1>
                    <button onClick={logout}>Sair!</button>
                </>
            ) : (
                <>
                    <h1>Você não está Logado/Auth</h1>
                    <button onClick={login}>Entrar!</button>
                </>
            )}
        </div>
    );
};

// Componente Login exportado
const Login = () => {
    return (
        <AuthProvider>
            <Usuario />
        </AuthProvider>
    );
};

export default Login;
