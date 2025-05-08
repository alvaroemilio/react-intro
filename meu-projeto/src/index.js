import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './Car.js';
import reportWebVitals from './reportWebVitals';

//const myElement = <h1>I Love JSX!</h1>;
//const myElement = React.createElement('h1', {}, 'I do not use JSX!');
//const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
/*const myElement = (
    <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
); */
//const myElement = <h1 className="myclass">Hello World</h1>;
/*const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;*/



// COMPONENTES COM PROPS
/*function Car(props)
{
    return <h2>I am a {props.color} Car!</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color ="red"/>); */



// COMPONENTES DENTRO DE COMPONENTES
/*
function Car() {
    return <h2>I am a Car!</h2>;
  }
  function Garage ()
  {
    return(
        <>
        <h1>O que tem na garagem?</h1>
        <Car />
        </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage/>)
*/



//IMPORTANDO CARRO DE OUTRO ARQUIVO 
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Car />);


//PASSAR DADOS DE UMA PROP PARA OUTRA 
/*function Cars(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
          <h1>Who lives in my garage?</h1>
          <Cars brand="Ford" />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  */



//PASSAR VARIAVEL DE UM PROP PARA OUTRO
/*function Cars(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    const carName = "Ford";
    return (
    <>
      <h1>Who lives in my garage?</h1>
      <Cars brand={ carName } />
    </>
  );
  }

  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  */



// PASSANDO VIA PROPS INFORMACOES DE OBJETOS 
  /*function Cars(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
          <h1>Who lives in my garage?</h1>
          <Cars brand={ carInfo } />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
*/



//PASSANDO PARA ALERT O ARGS VIA ONCLICK
/*function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);*/



  // PASSANDO PARA ALERT VIA ONCLICK COM PARAMS
  /*function Football() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);*/



  // PASSANDO OBJETO DE EVENTO MANUAL  
/*function Football() {
    const shoot = (a, b) => {
      alert(b.type);
    }
  
    return (
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);*/  
                


  // PASSANDO PROPS PARA CONTAR QUANTOS CARROS TEM EM UM ARRAY CARS
  /*function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }
      </>
    );
  }
  
  const cars = ['Ford', 'BMW', 'Audi'];
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage cars={cars} />);*/



  // VERIFICAR SE FEZ GOL OU NAO 
  /*function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);*/



//RENDERIZANDO ITENS DENTRO DE UMA ARRAY CARS 
/* 
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
*/

/*function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

*/

















//const myElement = <h1 className="myclass">Hello World</h1>;

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myElement);


reportWebVitals();
