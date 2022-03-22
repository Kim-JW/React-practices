import React from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'
import PropTypes from 'prop-types'

export default function TaskList ({tasks}) {
  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => <Task 
                                key={task.no}
                                name={task.name}
                                done={task.done}
                                       />)}
      </ul>
    </div>
  )
}

TaskList.PropTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.PropTypes))
}