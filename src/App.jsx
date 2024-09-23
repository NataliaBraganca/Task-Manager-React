import React from "react";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = React.useState([{
    id: 1,
    title: "Study React",
    description: "Study React to be a better Front-End developer",
    isCompleted: false
  },
  {
    id: 2,
    title: "Study German",
    description: "Study German to be a better Front-End developer",
    isCompleted: false
  },
  {
    id: 3,
    title: "Study Ruby on Rails",
    description: "Study React to be a better Front-End developer",
    isCompleted: false
  },

]);

  return (
    <div className= "w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className= "w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
        <Tasks tasks= {tasks}/>
        <AddTask />
        </div>
    </div>
  );
}

export default App;
