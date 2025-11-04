import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((c) => c + 1);
  const handleDoubleClick = () => setCount(0);

  return (
    <div className="app">
      {/* Heading text must remain constant */}
      <h1 className="title" onDoubleClick={handleDoubleClick}>
        JSX Keyword Replacement Challenge
      </h1>

      {/* Show the number somewhere else, not inside the H1 */}
      <p className="count">Button clicked {count} times</p>

      {/* Correct JSX attributes: className, onClick */}
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

