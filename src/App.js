import React, { useState } from "react";
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <h2>Counter</h2>
        <p>{count}</p>
        <div className="con-button">
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
