import { useState } from "react";
import Todos from "./Todos";
const Tarefas = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Tarefa 1: Limpar Barraco", "Tarefa 2: Lavar Carro"]);

  const increment = () => {
    setCount ((c) => c + 1);
  };


    return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}<br></br>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
  };
  
  export default Tarefas;