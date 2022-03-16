import React from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
import cards from './data.json'

// 카드 배열 분리, To do, Doing, Done state 보고 판단.
// 분리는 Filter 사용. map, 새로운 배열 생성

const KanbanBoard = () => {
    console.log(cards)

    const result = [0,1,2,3,4].filter((e) => e % 2 === 0);

    console.log(result)

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To do'} cards = {cards.filter(e => e.status === 'ToDo')}/>
            <CardList title={'Doing'} cards = {cards.filter(e => e.status === 'Doing')} />
            <CardList title={'Done'} cards = {cards.filter(e => e.status === 'Done')} />
        </div>
    )
}

export default KanbanBoard