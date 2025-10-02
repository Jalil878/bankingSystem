import { useState } from "react";

function Window1(props) {
  const user = props.user;
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div>
      <div className="bg-cyan-50 text-cyan-300 py-4 ">Home</div>
      <div className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white mt-5 p-6 rounded-xl">
        <h3 className="text-lg font-semibold  mb-3">Account Balance </h3>
        <div className="text-4xl font-semibold mb-3">
          {showBalance ? `₱ ${user.balance}` : "₱*****"}
        </div>

        <div className="account-info">
          <p>Account#: {user.account}</p>
        </div>

        <button
          onClick={() => setShowBalance(!showBalance)}
          className="mt-2 text-black bg-white py-1 px-3 rounded-full"
        >
          {showBalance ? "Hide" : "Show"}
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-800 py-6 text-start">
          Quick Action
        </h3>
        <div onClick={props.changeWindow}>
          <p className="bg-cyan-50 border-2 border-cyan-200 text-blue-800 rounded-xl py-4 mb-7">
            Send Money
          </p>
        </div>
      </div>
    </div>
  );
}

export default Window1;
