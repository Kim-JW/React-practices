import React, { useState } from 'react'
import styles from './assets/css/TaskList.css'
import PropTypes from 'prop-types'

export default function Task ({name, done}) {

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

Task.PropTypes = {
  name : PropTypes.string.isRequired,
  done : PropTypes.bool.isRequired
}