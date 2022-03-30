import React, { useState } from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'
import PropTypes from 'prop-types'

export default function TaskList ({no, tasks, removeNo, addTask, doneCheck_callback}) {

  console.log(`asdfasdfasdf ${tasks}`);

  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => <Task 
                                key={task.no}
                                no = {task.no}
                                name={task.name}
                                done={task.done}
                                removeNo = {removeNo}
                                doneCheck_callback={doneCheck_callback}
                                       />)}
            <input 
              type='text' 
              className={styles.TaskList__add_task}
              placeholder={'태스크 추가'}
              onKeyPress={e => {
                if(e.key === 'Enter'){
                  console.log(`call notifyAddTask(${e.target.value})`);
                  addTask(e.target.value, no);
                  e.target.value = '';
                }
              }}/>
      </ul>
    </div>
  )
}

TaskList.PropTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.PropTypes))
}