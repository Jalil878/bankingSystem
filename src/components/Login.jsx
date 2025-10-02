import React, { useState } from "react";

function Login(props) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  function loginBtn(e) {
    e.preventDefault();
    props.loginFxn(account, password);
  }
  return (
    <div className="mx-4">
      <div className="bg-white w-96 p-8 rounded-xl">
        <form action="">
          <h2 className="font-bold text-4xl text-center mb-5">Login</h2>
          <div>
            <input
              className="w-full p-3 bg-slate-200 rounded-md border-none outline-none text-base text-slate-600 mb-5"
              type="text"
              placeholder="Account #: "
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-3 bg-slate-200 rounded-md border-none outline-none text-base text-slate-600 mb-5"
              type="password"
              placeholder="Password: "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div></div>
          <button
            className="bg-cyan-300 text-white w-full rounded-md border-none outline-none p-3 text-base font-medium mb-5"
            onClick={loginBtn}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
