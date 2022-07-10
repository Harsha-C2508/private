import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/users");
      })
      .catch((err) => {
        console.log(err)
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formState.email}
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          <input
            value={formState.password}
            onChange={handleChange}
            placeholder="password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
