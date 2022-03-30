import React, { useState } from 'react'
import styles from './assets/css/TaskList.css'
import PropTypes from 'prop-types'

export default function Task ({no, name, done, removeNo, doneCheck_callback}) {

  const [stateDone, setStateDone] = useState(done);

  return (
    <li className={styles.TaskList__Task}>
      
      <input 
        type='checkbox' 
        checked={done === 'Y'}
        defaultValue={done}
        onChange={e => {doneCheck_callback(no, done);}} />
      {name}
      <a href='#' onClick={() => removeNo(no)} className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

Task.PropTypes = {
  name : PropTypes.string.isRequired,
  done : PropTypes.bool.isRequired
}