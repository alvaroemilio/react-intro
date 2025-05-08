import { memo } from "react";
import './App.css'

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
       <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <h2 style={{color: "red"}}>Minhas Tarefas</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);