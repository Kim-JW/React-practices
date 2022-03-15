import React from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
import cards from './data.json'

const KanbanBoard = () => {
    console.log(cards)

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To do'}/>
            <CardList title={'To do'}/>
            <CardList title={'To do'}/>
        </div>
    )
}

export default KanbanBoard