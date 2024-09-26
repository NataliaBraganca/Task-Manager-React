import React from "react";
import Input from "./Input";

function AddTask({onAddTaskSubmit}) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
     <Input
      type="text"
      placeholder="Type the title of the task"
      value = {title}
      onChange={(event)=> setTitle(event.target.value)}
      />

      <Input
      type="text"
      placeholder="Type the description of the task"
      value = {title}
      onChange={(event)=> setDescription(event.target.value)}
      />


     <button
     onClick={() => {
      //verificar se o título e a descricao estao preenchidos
      if (!title.trim() || !description.trim()) {
        return alert ("Preencha o título e a descricao da terafa")
      }
      onAddTaskSubmit(title, description)
      setTitle("")
      setDescription("")}}
     className="bg-slate-500 text-white px-4 py-2 rounded-md">Add task</button>
    </div>
  );
}

export default AddTask;
