import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <div class="button-container">
          <button onClick={() => setCounter(counter + 1)}> + </button>
          <button onClick={() => setCounter(counter - 1)}> - </button>
          <button onClick={() => setCounter(0)}> RESET</button>
        </div>
      </header>
    </div>
  );
}

export default App;
