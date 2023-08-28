import Header from "./components/Header";
import ResultScreen from "./components/ResultScreen";
import Button from "./components/Button";
import "./style/style.css";

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
  return (
    <>
      <main>
        <Header />
        <ResultScreen />
        <section className="buttons">
          {contents.map((element, index) => {
            const className =
              element === "DEL"
                ? "button2"
                : element === "RESET"
                ? "button3"
                : element === "="
                ? "button4"
                : "button1";
            return (
              <Button key={index} content={element} className={className} />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
