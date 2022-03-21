import React, { useState } from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'

//global 안 썼을 경우 - 해싱
// import styles from './assets/scss/App.scss';
// styles.App 

const App = () => {
  const [emails, setEmails] = useState(data);
  const [keyword, setKeyword] = useState('');
  // SpringBoot 로 된 API로 데이터를 통신으로 받아서 하게됨.

  const notifyKeywordChange = function(keyword) {
    // setKeyword(keyword)
    setEmails(data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1));
  }
  
  return (
    <div className={'App'}>
        <RegisterForm />
        <SearchBar callback={notifyKeywordChange}/>
        <Emaillist emails={emails}/>
    </div>
  )
}

export default App