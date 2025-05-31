import React from "react";
import { useState } from "react";
import "./style.css"; // Assuming you have a CSS file for styling

function App() {
  const [operator, setOperator] = useState("");
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setresult] = useState();

  const handleClick = ({ x }) => {
    if (operator === "") {
      // Typing first number
      setNumber(number * 10 + x);
    } else {
      // Typing second number
      setNumber2(number2 * 10 + x);
    }
  };

  const handleOperator = (opr) => {
    setOperator(opr);
  };

  const showresult = () => {
    if (operator === "+") {
      setresult(number + number2);
    } else if (operator === "-") {
      setresult(number - number2);
    } else if (operator === "*") {
      setresult(number * number2);
    } else if (operator === "/") {
      setresult(number2 !== 0 ? number / number2 : "Error");
    } else {
      setresult(number); // default: show number
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">{result !== undefined ? result : operator === "" ? number : number2}</div>
      <div className="button-grid">
        <button onClick={() => handleClick({ x: 1 })}>1</button>
        <button onClick={() => handleClick({ x: 2 })}>2</button>
        <button onClick={() => handleClick({ x: 3 })}>3</button>
        <button className="operator" onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleClick({ x: 4 })}>4</button>
        <button onClick={() => handleClick({ x: 5 })}>5</button>
        <button onClick={() => handleClick({ x: 6 })}>6</button>
        <button className="operator" onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleClick({ x: 7 })}>7</button>
        <button onClick={() => handleClick({ x: 8 })}>8</button>
        <button onClick={() => handleClick({ x: 9 })}>9</button>
        <button className="operator" onClick={() => handleOperator("*")}>×</button>
        <button style={{ gridColumn: "span 3" }} onClick={() => handleClick({ x: 0 })}>0</button>
        <button className="operator" onClick={() => handleOperator("/")}> ÷ </button>
        <button className="equals" onClick={showresult}>=</button>
      </div>
    </div>
  );
}

export default App;