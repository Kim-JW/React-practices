import React from 'react'
import styles from './assets/css/TaskList.css'

const Task = ({name}) => {
  return (
    <li className={styles.TaskList__Task}>
                  <input type='checkbox' defaultChecked={true} />
                  {name}
                  <a href='#' className={styles.TaskList__Task__remove}></a>
                </li>
  )
}

export default Task