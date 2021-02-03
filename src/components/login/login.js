import React, { useState } from "react";
import "./login.css";
const LoginComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onchangehandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.email === "bleh" && user.password == "123") {
      alert("bhakk madarchod");
    } else {
      alert("yahi patak k chod denge");
    }
  };
  return (
    <div>
      <form className="signin-container">
        <div className="ipcontainer">
          <input
            className="inputlogin"
            type="email"
            name="email"
            value={user.email}
            placeholder="email"
            onChange={onchangehandler}
          ></input>
        </div>
        <div className="ipcontainer">
          <input
            className="inputlogin"
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            onChange={onchangehandler}
          ></input>
        </div>

        <button className="submitbtm" onClick={onSubmitHandler}>
          Continue...
        </button>
      </form>
    </div>
  );
};
export default LoginComponent;
