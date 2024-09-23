
import React from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
