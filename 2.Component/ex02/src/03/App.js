import React from 'react'
import css from './assets/css/App.css';

// 이름이 충돌될 수 있기 때문에 CSS 모듈화

const App = () => {
  return (
    <div>
        <h1 className={'Header'}>{`Normal CSS(css loader options : {module: true})`}</h1>
    </div>
  )
}

export default App