import Header from "./components/Header";
import InputScreen from "./components/ResultScreen";
import Button from "./components/Button";
import "./style/style.css";
import { useState } from "react";
import { evaluate } from "./utils/helper";

function App() {
  const contents = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];
  const [input, setInput] = useState("0");
  return (
    <>
      <main>
        <Header />
        <InputScreen input={input} />
        <section className="buttons">
          {contents.map((element, index) => {
            switch (element) {
              case "DEL":
                return (
                  <Button
                    key={index}
                    content={element}
                    className={"button2"}
                    updateInput={() =>
                      setInput((previousInput) => {
                        if (previousInput.length === 1 || /nan|infinity|-infinity/i.test(input)) return "0";
                        return previousInput.slice(0, -1);
                      })
                    }
                  />
                );
              case "RESET":
                return (
                  <Button
                    key={index}
                    content={element}
                    className={"button3"}
                    updateInput={() => setInput("0")}
                  />
                );
              case "=":
                return (
                  <Button
                    key={index}
                    content={element}
                    className={"button4"}
                    updateInput={() => setInput(evaluate(input))}
                  />
                );
              case "+":
              case "-":
              case "/":
              case "x":
                return (
                  <Button
                    key={index}
                    content={element}
                    className={"button1"}
                    updateInput={(content) =>
                      setInput((previousInput) => {
                        // if (addOperation(previousInput))
                          return previousInput + content;
                        // return previousInput;
                      })
                    }
                  />
                );
              default:
                return (
                  <Button
                    key={index}
                    content={element}
                    className={"button1"}
                    updateInput={(content) =>
                      setInput((previousInput) => {
                        if (previousInput === "0") return content;
                        return previousInput + content;
                      })
                    }
                  />
                );
            }
          })}
        </section>
      </main>
    </>
  );
}

export default App;
