import React, {useState} from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList'

const Card = ({key, title, description, tasks}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.Card}>
      <div className={styles.Card__Title}>{title}</div> // 이거 클릭일때, 
          <div className={styles.Card__Details}>
            {description}
          <TaskList tasks={tasks} /></div>
    </div>
  )
}

export default Card