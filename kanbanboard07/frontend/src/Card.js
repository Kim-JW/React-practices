import React, {useState} from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList'
import PropTypes from 'prop-types'

export default function Card ({key, title, description, tasks}) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className={styles.Card}>
      <div 
        className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
        onClick={()=> setShowDetails(!showDetails)}>
        {title}
        </div>
        {
          showDetails ?
          <div className={styles.Card__Details}>
            {description}
          <TaskList tasks={tasks} /></div>
         : null
        }
    </div>
  )
}

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape(TaskList.PropTypes))
}