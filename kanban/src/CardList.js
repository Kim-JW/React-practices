import React from 'react'
import styles from './assets/css/CardList.css'
import Card from './Card'
const CardList = ({title, cards}) => {
    console.log(title, cards)

    return (
        // map 사용해서 ㄱ
        // cards.map()
        <div className={styles.CardList}>
            <div>{cards.map((card) => < Card
                                        key={card.no}
                                        title={card.title}
                                        description={card.description}
                                        status={card.status}
                                        tasks={card.tasks} />)}</div>
            
        </div>
    )
}

export default CardList