import { useState } from 'react';
import "./Login.css";

function Login() {
    
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.password) {
      alert("Please fill all fields");
      return;
    }
    alert("Login Successfully");
  }

  return (
    <div className="container">
      <form className="box" onSubmit={handleSubmit}>
        
        <label>UserName:</label>
        <input
          className="input"
          type="text"
          name="name"
          value={inputs.name || ""}
          placeholder="Eg: John"
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          className="input"
          type="text"
          name="email"
          value={inputs.email || ""}
          placeholder="Eg: abc@gmail.com"
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          className="input"
          type="password"
          name="password"
          value={inputs.password || ""}
          placeholder="Enter correct password"
          onChange={handleChange}
        />

        <div className="topLinks">
          <span className="link">Create Account</span>
          <span className="link">Forgot Password</span>
        </div>

        <button type="submit" className="button">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;