import React from 'react'
import styles from './assets/scss/Emaillist.scss'
import Email from './Email'

const Emaillist = ({emails}) => {
  return (
    <ul className={styles.Emaillist}>
        {
          emails.map(e => <Email 
                          firstName = {emails.firstName}
                          lastName = {emails.lastName}
                          email = {emails.email} />)
        }
        <Email />
        <Email />
     </ul>
  )
}

export default Emaillist