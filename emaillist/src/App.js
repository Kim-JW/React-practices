import React from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'

//global 안 썼을 경우 - 해싱
// import styles from './assets/scss/App.scss';
// styles.App 

const App = () => {
  
  return (
    <div className={'App'}>
        <RegisterForm />
        <SearchBar />
        <Emaillist emails={data}/>
    </div>
  )
}

export default App