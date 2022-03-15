import React from 'react'
import styles from './assets/css/Banner02.css';
// import from './assets/css/Banner02.css'; 로하고 , className = {'Header'}, modules=false 로 주면 , 덮어쓰기가 되어서 같은 CSS가 적용이 된다. 

const Banner02 = () => {
  return (
    <h1 className={styles.Header}>Hello React</h1>
  )
}

export default Banner02

/*
  슬프구나...ㅎㅅㅎ

  ㅇㅅㅇ ㅁㅅㅁ ㅇㅅㅇ ㅎㅇㅎ

  ^___________________^

  ^____ㅇ____^

  ###########--------###########

  ㅜㅠㅜㅠㅜㅠㅜㅠㅜㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ

  ㅠㅠㅅㅠㅠ
  
  -------------
  
  ㅇㅅㅇ 
      ㅇㅅㅇ 
          ㅎㅅㅎ 
      ㅇㅅㅇ 
  ㅇㅅㅇ

  -------------

*/