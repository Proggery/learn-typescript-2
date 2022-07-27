import "./App.css";
import CustomHooks from "./components/customHooks/CustomHooks";
import TestComponent from "./components/EventMore";
import Context from "./components/useContext/UseContext";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

function App() {
  return (
    <div>
      <h1>UseState</h1>
      <UseState />
      <h1>UseEffekt</h1>
      <UseEffect />
      <h1>UseContext</h1>
      <Context />
      <h1>UseReducer</h1>
      <UseReducer />
      <h1>UseRef</h1>
      <UseRef />
      <h1>Custom Hook</h1>
      <CustomHooks />
      <h1>Event More</h1>
      <TestComponent />
    </div>
  );
}

export default App;
