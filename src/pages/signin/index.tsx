import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../home/components/header";
import { AuthContext } from "../../context/authContext";

const Signin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/blog/home");
    } catch (err: any) {
      setErr(err.response.data);
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(229, 151, 104)" }}>
      <Header />
      <div className="login">
        <div className="cardSignin">
          <div className="signinleft d-none d-md-block">
            <h1>Hello World.</h1>
            <p>
              Discover the unknown, share your travels, and become a travel
              guru!
            </p>

            <span>Don't you have an account?</span>
            <br />
            <br />
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="signinright ">
            <h1>Log in</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {err && err}
              <button onClick={handleLogin}>Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
