import {useReducer} from "react";

const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "inc":
      return { ...state, counter: state.counter + action.payload };
    case "dec":
      return { ...state, counter: state.counter - action.payload };

    default:
      throw new Error("Hibás Művelet!");
      
  }
}

function UseReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div>
            <div>
                {state.counter}
            </div>
            <div>
                <button onClick={() => { dispatch({type: "inc", payload: 1}) }}>
                    +
                </button>
            </div>
            <div>
                <button onClick={() => { dispatch({type: "dec", payload: 1}) }}>
                    -
                </button>
            </div>
        </div>
    )
}

export default UseReducer;
