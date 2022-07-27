import { createContext } from "react";

const initialState = {
  first: "Gergő",
  last: "Höller",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
