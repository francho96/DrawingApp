import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Dibujo from "./components/Dibujo";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Dibujo />
    </div>
  );
}

export default App;
