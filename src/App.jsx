import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(0);

  const [users, setUsers] = useState([
    { name: "Jalil", account: 1234, password: "userpass", balance: 10000 },
    { name: "Ryan", account: 4321, password: "user123", balance: 20000 },
    { name: "abubacar", account: 3333, password: "pass123", balance: 30000 },
  ]);

  function logout() {
    setLogged(0);
  }

  function loginFxn(acctNum, password) {
    let userIndex = users.findIndex((obj) => obj.account === parseInt(acctNum));

    if (userIndex === -1) {
      return alert("Wrong Account #");
    }
    if (password !== users[userIndex].password) {
      return alert("Wrong Password");
    }

    alert("Successful login");
    setLogged(userIndex + 1);
  }

  function sendMoney(recipientAcctNum, amount) {
    const senderIndex = logged - 1;
    const recipientIndex = users.findIndex(
      (u) => u.account === parseInt(recipientAcctNum)
    );

    const transferAmount = parseFloat(amount);

    if (recipientIndex === senderIndex) {
      return alert("You can't send money to your own account.");
    }

    if (isNaN(transferAmount) || transferAmount <= 0) {
      return alert("Please enter a valid amount.");
    }

    if (users[senderIndex].balance < transferAmount) {
      return alert("Insufficient balance.");
    }

    // Copy users array
    const updatedUsers = [...users];
    updatedUsers[senderIndex].balance -= transferAmount;
    updatedUsers[recipientIndex].balance += transferAmount;

    setUsers(updatedUsers);
    alert(`₱${transferAmount} sent to ${updatedUsers[recipientIndex].name}`);
  }

  return (
    <div>
      {!logged ? (
        <Login loginFxn={loginFxn} />
      ) : (
        <Home
          user={users[logged - 1]}
          sendMoney={sendMoney}
          logout={logout}
          allUsers={users}
        />
      )}
    </div>
  );
}

export default App;
