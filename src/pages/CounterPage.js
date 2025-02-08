import { useReducer } from "react";
import Button from "../components/button";
import Panel from "../components/panel";
import { produce } from "immer";

const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const ADD_VALUE = "ADD_VALUE";
const SUBMIT_VALUE = "SUBMIT_VALUE";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE:
      state.valueToAdd = action.payLoad;
      return;
    case SUBMIT_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [input, setInput] = useState(0);

  const [state, dispatch] = useReducer(produce.reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: ADD_VALUE,
      payLoad: value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SUBMIT_VALUE,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lh">Counter is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot !</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        ></input>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
