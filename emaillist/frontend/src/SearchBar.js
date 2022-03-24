import React from 'react'
import styles from './assets/scss/Searchbar.scss';
import {PropTypes} from 'prop-types';

export default function SearchBar ({keyword, callback}) {
  return (
    <div className={styles.Searchbar}>
        찾기: <input 
          type='text' 
          placeholder='찾기'
          onChange={e => callback(e.target.value)}/>
    </div>
  )
}

SearchBar.propTypes = {
  callback : PropTypes.func.isRequired
}