import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = (expression) => {
    try {
      return Function('"use strict"; return (' + expression + ")")();
    } catch {
      return "Error";
    }
  };

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      if (input === "") {
        setResult("Error");
      } else {
        const output = calculateResult(input);
        setResult(String(output));
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
  ];

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <input type="text" value={input} readOnly />

      <div className="result">{result}</div>

      <div className="button-grid">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;