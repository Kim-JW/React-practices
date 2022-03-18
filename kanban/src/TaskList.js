import React from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'

const TaskList = ({tasks}) => {
  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => <Task 
                                key={task.no}
                                name={task.name}
                                       />)}
      </ul>
    </div>
  )
}

export default TaskList