import { useState } from "react";
import Window1 from "./windows/Window1";
import Window2 from "./windows/Window2";

function Home(props) {
  const user = props.user;
  const [currentwn, setCurrentwn] = useState(0);

  function changeWindow() {
    if (currentwn == 0) {
      setCurrentwn(1);
    }
    if (currentwn == 1) {
      setCurrentwn(0);
    }
  }

  return (
    <div className="mx-4">
      <div className="bg-white w-96 p-8 rounded-xl text-center">
        <div className="flex bg-gradient-to-r from-blue-800 to-cyan-500 justify-between items-center text-white  py-6 px-6">
          <h2 className="font-semibold text-2xl">Welcome, {user.name}!</h2>
          <button
            onClick={props.logout}
            className="bg-blue-800 py-2 px-7 rounded-3xl text-base"
          >
            Logout
          </button>
        </div>

        {currentwn == 0 ? (
          <Window1 user={props.user} changeWindow={changeWindow} />
        ) : (
          <Window2
            sendMoney={props.sendMoney}
            changeWindow={changeWindow}
            allUsers={props.allUsers}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
