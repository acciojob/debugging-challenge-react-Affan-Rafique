import React from "react";

export default function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">JSX Keyword Replacement Challenge</h1>
      </header>

      <main className="container">
        {/* for -> htmlFor */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="nameInput" className="label">
              Name
            </label>
            {/* class -> className, placeholder is fine as-is */}
            <input
              id="nameInput"
              className="input"
              type="text"
              placeholder="Enter your name"
              // readonly -> readOnly
              readOnly={false}
              // tabindex -> tabIndex
              tabIndex={0}
              // value (if controlled) or defaultValue (uncontrolled). Using defaultValue to keep it simple.
              defaultValue=""
            />
          </div>

          {/* onclick -> onClick (case-sensitive) */}
          <button type="button" className="btn" onClick={handleClick}>
            Click Me
          </button>
        </form>

        {/* style should be an object, not a string */}
        <p
          className="note"
          style={{ marginTop: "16px", color: "#555", fontStyle: "italic" }}
        >
          All JSX attributes are now valid: <code>className</code>,{" "}
          <code>htmlFor</code>, <code>onClick</code>, <code>readOnly</code>,{" "}
          <code>tabIndex</code>, and object-based <code>style</code>.
        </p>
      </main>
    </div>
  );
}
