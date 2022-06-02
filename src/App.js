import "./App.css";
import { useState } from "react";
import { InputShortener, LinkResult } from "./components";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
};

export default App;
