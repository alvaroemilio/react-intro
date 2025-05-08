import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForms';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  // Adicionar uma nova tarefa
  const addTodo = (text) => {
    setTodos([...todos, { id: nextId, text, completed: false }]);
    setNextId(nextId + 1);
  };

  // Alternar o status de conclusão de uma tarefa
  const toggleCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Excluir uma tarefa
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;



/*
Como funciona a aplicação:
Adicionar Tarefas: Quando você digita algo no campo de entrada e clica em "Adicionar", uma nova tarefa é adicionada à lista.
Marcar Tarefa como Concluída: Quando você clica no texto da tarefa, ela é marcada como concluída, o que aplica um estilo de "riscado" ao texto.
Excluir Tarefas: Cada tarefa tem um botão de "Excluir", que remove a tarefa da lista quando clicado.
*/