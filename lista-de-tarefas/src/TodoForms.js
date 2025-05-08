import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
