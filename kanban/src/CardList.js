import React from 'react'
import styles from './assets/css/CardList.css'

const CardList = ({title, cards}) => {
    console.log(title, cards)

    return (
        // map 사용해서 ㄱ
        // cards.map()
        <div className={styles.CardList}>
            <h1>{title}</h1>
            
        </div>
    )
}

export default CardList