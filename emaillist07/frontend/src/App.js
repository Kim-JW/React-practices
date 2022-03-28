import React, { useState, useEffect } from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

//global 안 썼을 경우 - 해싱
// import styles from './assets/scss/App.scss';
// styles.App 

const App = () => {
  const [emails, setEmails] = useState([]);
  const [keyword, setKeyword] = useState('');
  // SpringBoot 로 된 API로 데이터를 통신으로 받아서 하게됨.

  useEffect(async () => {
    try {
      // fetch는 비동기니까 await 써줘야
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      })
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        console.log("error: ", json.message);
        throw new Error(`${json.result} ${json.message}`); 
      }

      setEmails(json.data);

      }catch(err) {
        console.log(err);
      }

  }, [])

  const notifyEmailAdd = async function(email) {
    try {  
      const response = await fetch('/api', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(email)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails([json.data, ...emails]);
    } catch(err) {
      console.log(err);      
    }    
  }

  const notifyKeywordChange = async function(keyword) {
    // setKeyword(keyword)

    //console.log("api/kw=?")
    //setEmails(data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1));

    try {
      const response = await fetch(`/api?kw=${keyword}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      })
      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();  //response.json()는 비동기 함수

      if(json.result !== 'success'){
        console.log("error!!!!", json.message);
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data)

    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div className={'App'}>
        <RegisterForm callback={notifyEmailAdd}/>
        <SearchBar callback={notifyKeywordChange}/>
        <Emaillist emails={emails}/>
    </div>
  )
}

export default App