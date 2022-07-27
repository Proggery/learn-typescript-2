import { useContext } from "react";
import UserContext, { UserState } from "./Store";

export function Consumer() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}
