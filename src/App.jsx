/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import "./App.css";
import NumberFormat from "react-number-format";

const App = () => {
  const [prevState, setPrevState] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNumb = (e) => {
    // Evita escribir doble o mas puntos (.)
    if (currentState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setCurrentState("");
    }

    currentState.length !== 0
      ? setCurrentState((pre) => pre + e.target.innerText)
      : setCurrentState(e.target.innerText);

    setTotal(false);
  };

  useEffect(() => {
    setInput(currentState);
  }, [currentState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const equals = (e) => {
    // Verifica que n oeste vacio
    if (e?.target.innerText === "=") {
      setTotal(true);
    }

    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(prevState) / parseFloat(currentState));
        break;
      case "+":
        cal = String(parseFloat(prevState) + parseFloat(currentState));
        break;
      case "X":
        cal = String(parseFloat(prevState) * parseFloat(currentState));
        break;
      case "-":
        cal = String(parseFloat(prevState) - parseFloat(currentState));
        break;
      default:
        return cal;
    }
    setInput("");
    setPrevState(cal);
    setCurrentState("");
  };

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currentState === "") return;
    if (prevState !== "") {
      equals();
    } else {
      setPrevState(currentState);
      setCurrentState("");
    }
  };

  const minusPlus = () => {
    if (currentState.charAt(0) === "-") {
      setCurrentState(currentState.substring(1));
    } else {
      setCurrentState(`-${currentState}`);
    }
  };

  const percent = () => {
    prevState
      ? setCurrentState(String((parseFloat(currentState) / 100) * prevState))
      : setCurrentState(String(parseFloat(currentState) / 100));
  };

  const reset = () => {
    setPrevState("");
    setCurrentState("");
    setInput("0");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {input !== "" || input === "0" ? (
            <NumberFormat value={input} displayType="text" thousandSeparator />
          ) : (
            <NumberFormat
              value={prevState}
              displayType="text"
              thousandSeparator
            />
          )}
        </div>
        <button type="button" className="btn light-gray" onClick={reset}>
          AC
        </button>
        <button type="button" className="btn light-gray" onClick={percent}>
          %
        </button>
        <button type="button" className="btn light-gray" onClick={minusPlus}>
          +/-
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          /
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          7
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          8
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          9
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          X
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          4
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          5
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          6
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          +
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          1
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          2
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          3
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          -
        </button>
        <button type="button" className="btn zero" onClick={inputNumb}>
          0
        </button>
        <button type="button" className="btn" onClick={inputNumb}>
          .
        </button>
        <button type="button" className="btn" onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
