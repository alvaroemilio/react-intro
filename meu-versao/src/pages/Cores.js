import { useState } from "react";
import ReactDOM from "react-dom/client";

const Cores = () => {
  function Color() {
    const [color, setColor] = useState("red");
    
    return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
        </>
      );
  }

  return (
    <div>
      <Color />
    </div>
  );
};

export default Cores;
