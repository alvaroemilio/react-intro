import React, { useState } from "react";
import logo from '../logo.svg';
import '../App.css';

const Tarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState('');

    const adicionarTarefa = () => {
        setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
        setTarefa('');
    };

    const marcarConcluida = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas[index].concluida = !novasTarefas[index].concluida;
        setTarefas(novasTarefas);
    };

    const removerTarefa = (index) => {
        const novasTarefas = tarefas.filter((tarefa, i) => i !== index);  // Corrigido aqui
        setTarefas(novasTarefas);
    };

    return (
        <div>
            <input
                type="text"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                placeholder="Adicionar Tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                            {tarefa.texto}
                        </span>
                        <button onClick={() => marcarConcluida(index)}>Concluir</button>
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tarefas;
