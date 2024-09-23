import { ChevronsRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
          onClick={() => props.onTaskClick(task.id)}
          className="bg-slate-400 text-lef t w-full text-white p-2 rounded">
            {task.title}
            {task.isCompleted ? "COMPLETE" : "INCOMPLETE"}
          </button>
          <button className= "bg-slate-400 p-2 rounded-md text-white" >
            <ChevronsRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
