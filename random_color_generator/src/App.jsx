import { useState } from "react";
import RandomColor from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RandomColor />
    </div>
  );
}

export default App;
