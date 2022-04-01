import React from 'react'
import { NavLink } from 'react-router-dom';
import styles2 from '../../assets/scss/component/about/Navigation.scss';

const navigation = () => {
  return (
    <nav className={styles2.Navigation}>
        <NavLink to={'/about/me'}>Me</NavLink>
        <span/>
        <a href={'/about/location'}>Location</a>
    </nav>
  )
}

export default navigation