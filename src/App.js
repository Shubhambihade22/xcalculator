import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      if (input === "") {
        setResult("Error");
      } else {
        try {
          const evalResult = eval(input);
          setResult(String(evalResult));
        } catch (error) {
          setResult("Error");
        }
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>React Calculator</h1>

      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "250px",
          height: "35px",
          fontSize: "22px",
          marginBottom: "20px",
        }}
      />

      {/* Single div for result */}
      <div
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          minHeight: "40px",
        }}
      >
        {result}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            style={{
              width: "80px",
              height: "80px",
              fontSize: "30px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
