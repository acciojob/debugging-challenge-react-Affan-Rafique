import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((c) => c + 1);
  const handleDoubleClick = () => setCount(0);

  return (
    <div className="app">
      {/* Must remain constant for the test */}
      <h1 className="title" onDoubleClick={handleDoubleClick}>
        JSX Keyword Replacement Challenge
      </h1>

      {/* Show counter here (NOT inside the h1) */}
      <p className="count">Button clicked {count} times</p>

      <label htmlFor="btn" className="label">Press:</label>
      <button id="btn" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}


