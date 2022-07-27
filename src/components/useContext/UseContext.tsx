import { useState } from "react";
import {Consumer} from "./Consumer";
import UserContext, { UserState } from "./Store";

function Context() {
  const [user, setUser] = useState<UserState>({
    first: "Jim",
    last: "Beam",
  });
  return (
    <UserContext.Provider value={user}>
      <Consumer />
      <button
        onClick={() => {
          setUser({
            first: "Jack",
            last: "Daniels",
          });
        }}
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}

export default Context;
