import React, {useState} from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList'
//import PropTypes from 'prop-types'

export default function Card ({cardNo, title, description}) {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const removeNo = async function (no) { 
    
    var data = new Object();
    data.no = no;
    console.log(JSON.stringify(data));
    try {
      const response = await fetch(`/api/delete`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      setTasks(tasks.filter(t => t.no !== no));
    } catch (err) {
      console.log(err);
    }
  }

  const addTask = async function (value, no) {

    var data = new Object();
    data.no = no;
    data.name = value;
    try {
      const response = await fetch(`/api/addTask`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks([json.data, ...tasks]);
    } catch (err) {
      console.log(err);
    }

    notifyTask();
  }

  const notifyTaskDone = async function(no, done) {
    console.log(`/api/taskDone?no=${no}&checked=${done}`);

    var data = new Object();
    data.done = done == 'N' ? 'Y' : 'N';
    data.no = no;

    try {   
      const response = await fetch(`/api/taskDone`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      const updateTask = tasks.map((t) => {
        if(t.no === no) {
          t.done = done;
        }
        return t;
      });

      setTasks(updateTask);

    } catch(err) {
      console.log(err);      
    }
    
    notifyTask();
  }

  const notifyTask = async function() {
    try {  
      const response = await fetch(`/api/task?no=${cardNo}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks(json.data);

    } catch(err) {
      console.log(err);
    }    
  }

  return (
    <div className={styles.Card}>
      <div 
        className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
        onClick={()=> {
          console.log(`... fetch task(/api/task?cardNo=${cardNo})...`);
          notifyTask(cardNo);
          setShowDetails(!showDetails);
        }}>
        {title}
        </div>
        {
          showDetails ?
          <div className={styles.Card__Details}>
            {description}
          <TaskList 
              no={cardNo} 
              tasks={tasks} 
              removeNo={removeNo} 
              addTask={addTask} 
              doneCheck_callback={notifyTaskDone}/></div>
         : null
        }
    </div>
  )
}

// Card.PropTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   tasks: PropTypes.arrayOf(PropTypes.shape(TaskList.PropTypes))
// }