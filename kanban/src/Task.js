import React, { useState } from 'react'
import styles from './assets/css/TaskList.css'

const Task = ({name, done}) => {

  const [checkState, setCheckState] = useState(done)

  return (
    <li className={styles.TaskList__Task}>
      <input 
        type='checkbox' 
        checked={checkState}
        onClick={() => setCheckState(!checkState)} />
      {name}
      <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default Task