import React from 'react'
import styles from './assets/scss/App.scss';

// 이름이 충돌될 수 있기 때문에 CSS 모듈화

const App = () => {
  return (
    <div className={styles.App}>
        <h1 className={styles.Header}>{`SACC & SCSS (css loader options : {module: true})`}</h1>
    </div>
  )
}

export default App