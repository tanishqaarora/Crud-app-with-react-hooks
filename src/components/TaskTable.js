import React from 'react'

const TaskTable = ({tasks, editTask, deleteTask}) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
        {tasks.length > 0 ? (
            tasks.map(task => (
                <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.completed}</td>
                    <td>
                        <button onClick={() => editTask(task)} className="button muted-button">Edit</button>
                        <button onClick={() => deleteTask(task.id)} className="button muted-button">Delete</button>
                    </td> 
                </tr>
            ))
        ) : (
            <tr>
                <td>No tasks</td>
            </tr>
        )}   
    </tbody>
  </table>
)

export default TaskTable