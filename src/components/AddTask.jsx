import React from "react";

function AddTask({onAddTaskSubmit}) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
     <input type="text"
      placeholder="Type the title of the task"
      className= "border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value = {title}
      onChange={(event)=> setTitle(event.target.value)}
      />

     <input type="text"
     placeholder="Type the description of the task"
     className= "border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
     value = {description}
     onChange={(event)=> setDescription(event.target.value)}
     />
     <button
     onClick={() => {
      onAddTaskSubmit(title, description)
      setTitle("")
      setDescription("")}}
     className="bg-slate-500 text-white px-4 py-2 rounded-md">Add task</button>
    </div>
  );
}

export default AddTask;
