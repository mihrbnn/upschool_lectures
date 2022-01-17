import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reduxStore/counter";
import { addTask, removeTask } from "./reduxStore/tasks";

function App() {
  const state = useSelector((state) => state);
  const counter = useSelector((state) => state.counter);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  console.log("counter:::", counter);

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(addTask(event.target.task.value));
    event.target.task.value = ""; //imput içindeki value sıfırladık
  };

  return (
    <div className="App">
      <h1>Redux</h1>
      {/* {JSON.stringify(state)} */}
      <hr />
      <form onSubmit={formHandler}>
        <input type="text" name="task" id="task"></input>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((item) => (
          <li onClick={() => dispatch(removeTask(item.id))} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <hr />
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
    </div>
  );
}

export default App;
