import React, { useState } from 'react';
import './App.css';

import TaskTable from './components/TaskTable';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const initialFormState = { id: null, title: '', completed: '' }

  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialFormState)

  const addTask = (task) => {
    task.id = tasks.length + 1
    setTasks([...tasks, task])
  }

  const editTask = (task) => {
    setEditing(true)
    setCurrentTask({ id: task.id, title: task.title, completed: task.completed })
  }

  const updateTask = (id, updatedTask) => {
    setEditing(false)
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
  }

  const deleteTask = (id) => {
    setEditing(false)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='Container'>
      <h1>CRUD App</h1>
      <div>
          <div className='add-task-form'>
            <h2>Add Task</h2>
            <AddTaskForm 
              addTask={addTask}
              editing={editing}
              setEditing={setEditing}
              currentTask={currentTask}
              updateTask={updateTask} 
            />
          </div>
          <div className='view-task'>
            <h2>View Tasks</h2>
            <TaskTable tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
          </div>   
      </div>
      
    </div>
  );
}

export default App;
