import { useState } from 'react';

function Name() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <h1>Current value: {name}</h1>
    </>
  );
}

export default Name;