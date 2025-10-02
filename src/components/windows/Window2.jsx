import { useState } from "react";

function Window2(props) {
  const [sendAccount, setSendAccount] = useState("");
  const [sendBalance, setSendBalance] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [recipientName, setRecipientName] = useState("");

  function handleSend(e) {
    e.preventDefault();

    const recipient = props.allUsers.find(
      (u) => u.account === parseInt(sendAccount)
    );

    if (!recipient) {
      return alert("Recipient account not found.");
    }

    setRecipientName(recipient.name);
    setShowConfirm(true);
  }

  function confirmSend() {
    props.sendMoney(sendAccount, sendBalance);
    setShowConfirm(false);
  }

  return (
    <div>
      <div className="text-start">
        <h3 className="text-blue-800 text-2xl py-4 font-semibold">
          Send Money
        </h3>
        <div>
          <div className="mb-4">
            <div className="text-blue-800 py-2 ">Recipient Account</div>
            <input
              className="w-full bg-cyan-50 border-2 border-cyan-200 rounded-lg p-3"
              type="text"
              id="recipient"
              placeholder="Enter recipient's account"
              required
              value={sendAccount}
              onChange={(e) => setSendAccount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="text-blue-800 py-2 ">Amount</div>
            <input
              className="w-full bg-cyan-50 border-2 border-cyan-200 rounded-lg p-3"
              type="number"
              id="amount"
              placeholder="Enter amount"
              required
              value={sendBalance}
              onChange={(e) => setSendBalance(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSend}
        className="text-white bg-cyan-300 w-full rounded-md py-3 mb-2"
      >
        Send Money
      </button>
      <button
        onClick={props.changeWindow}
        className="text-white bg-cyan-300 w-full rounded-md py-3"
      >
        Return Home
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">
              Confirm Transaction
            </h3>
            <p className="mb-6">
              You want to send money to{" "}
              <span className="font-semibold">{recipientName}</span>?
            </p>
            <div className="flex justify-around">
              <button
                onClick={confirmSend}
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
              >
                Send
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Window2;
