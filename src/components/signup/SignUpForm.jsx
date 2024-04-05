import React from "react";
import "./signUpFrom.styles.scss";
import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RePassword, setRePassword] = useState("");
  const [displayname, setDisplayname] = useState("");

  const handleLoginUser = (e) => {
    e.preventDefault();
    const user = {
      displayname,
      email,
      Password,

      createdAt: new Date(),
    };

    console.log(user);
  };
  return (
    <form onSubmit={(e) => handleLoginUser(e)}>
      <div className="container" style={{ width: "30%" }}>
        <label htmlFor="dname">
          <b>Display Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="dname"
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
          required
        />

        <label htmlFor="email">
          <b>E-mail</b>
        </label>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="psw">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          name="psw"
          required
          value={RePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button disabled={RePassword === Password ? false : true} type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
