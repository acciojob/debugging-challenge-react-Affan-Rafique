import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // increment count on button click
    setCount(count + 1);
  };

  const handleDoubleClick = () => {
    // reset to 0 when title is double-clicked
    setCount(0);
  };

  return (
    <div className="app">
      {/* FIXED: Use correct heading text and correct JSX attributes */}
      <h1 className="title" onDoubleClick={handleDoubleClick}>
        JSX Keyword Replacement Challenge
      </h1>

      <p className="count">Button clicked {count} times</p>

      {/* FIXED: onclick → onClick, class → className */}
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
