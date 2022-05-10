/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { Button, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import "./App.css";
import NumberFormat from "react-number-format";
import ColorModeSwitcher from "./navbar/ColorModeSwitcher";

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

  const bg = useColorModeValue("white", "#191C22");
  const btbg = useColorModeValue("#FAFAFA", "#262931");

  return (
    <div className="container">
      <div className="wrapper">
        <Flex bg={bg} className="screen">
          <ColorModeSwitcher />
          <Text
            display="flex"
            w="100%"
            height="148px"
            alignItems="end"
            justifyContent="flex-end"
          >
            {input !== "" || input === "0" ? (
              <NumberFormat
                value={input}
                displayType="text"
                thousandSeparator
              />
            ) : (
              <NumberFormat
                value={prevState}
                displayType="text"
                thousandSeparator
              />
            )}
          </Text>
        </Flex>
        <Button
          type="button"
          h="100%"
          color="#265B63"
          bg={btbg}
          onClick={reset}
        >
          AC
        </Button>
        <Button type="button" color="#265B63" bg={btbg} onClick={percent}>
          %
        </Button>
        <Button type="button" color="#265B63" bg={btbg} onClick={minusPlus}>
          +/-
        </Button>
        <Button type="button" color="#DF7575" bg={btbg} onClick={operatorType}>
          /
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          7
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          8
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          9
        </Button>
        <Button type="button" color="#DF7575" bg={btbg} onClick={operatorType}>
          X
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          4
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          5
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          6
        </Button>
        <Button type="button" color="#DF7575" bg={btbg} onClick={operatorType}>
          +
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          1
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          2
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          3
        </Button>
        <Button type="button" bg={btbg} onClick={operatorType}>
          -
        </Button>
        <Button type="button" bg={btbg} className="zero" onClick={inputNumb}>
          0
        </Button>
        <Button type="button" bg={btbg} onClick={inputNumb}>
          .
        </Button>
        <Button type="button" color="#DF7575" bg={btbg} onClick={equals}>
          =
        </Button>
      </div>
    </div>
  );
};

export default App;
