import React from 'react';

const TodoItem = ({ todo, toggleCompletion, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => toggleCompletion(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Excluir
      </button>
    </li>
  );
};

export default TodoItem;
