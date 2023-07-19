import React, { useEffect, useState } from 'react'

const AddTaskForm = ({addTask, editing, setEditing, currentTask, updateTask}) => {

  const initialFormState = { id: null, title: '', completed: '' }
  const [task, setTask] = useState(initialFormState)
  const [mode, setMode] = useState('add');

  useEffect(() => {
    if (editing === false) {
      setMode('add');
      setTask(initialFormState)
    } else {
      setMode('edit');
      setTask(currentTask)
    }
  }, [editing]);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTask({ ...task, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.title || !task.completed) return;

    if (mode === 'add') {
       addTask(task);
    } else if (mode === 'edit') {
      updateTask(task.id, task);
    }
    setTask(initialFormState);
  };

  return (
    <form
      onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" name="title" value={task.title} onChange={handleInputChange} />
      <label>Completed</label>
      <input type="text" name="completed" value={task.completed} onChange={handleInputChange} />
      {mode === 'add' ? (
        <button className='add-task-button'>Add new task</button>
      ) : (
        <>
          <button>Update task</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      )}
    </form>
  )
}

export default AddTaskForm