import { useState } from "react";
import Overview     from "./components/Overview";

function App() {
  const [task, setTask]   = useState("");
  const [tasks, setTasks] = useState([]);


  function addTask(e) {
    let { value } = e.target;
    setTask(value)
  }

  function addToTasks(e) {
    e.preventDefault();

    if(task === "") {
      return 
    }

    const newTasks = [...tasks].concat(task)
    setTasks(newTasks)
    setTask("")  
  }

  function handleClick(itemIndex) {
     const newTasks = [...tasks]
     newTasks.splice(itemIndex, 1)

     setTasks(newTasks)
  }




  return (
    <div>
      <div className="floater-container">
        <form className="floater__form" onSubmit={addToTasks}>
          <div className="floater__form__top">
            <input
              type="text"
              value={task}
              onChange={addTask}
              placeholder="Enter a Task"
            />
          </div>
          <div className="floater__form__bottom">
            <button>Add task</button>
          </div>
        </form>
      </div>
      <Overview tasks={tasks} handleClick={handleClick}/>
    </div>
  );
}

export default App;
