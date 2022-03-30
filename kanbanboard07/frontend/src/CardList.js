import React from 'react'
import styles from './assets/css/CardList.css'
import Card from './Card'
import PropTypes from 'prop-types'

export default function CardList ({title, cards}) {
    console.log(title, cards)

    return (
        // map 사용해서 ㄱ
        // cards.map()
        <div className={styles.CardList}>
            <div>{cards.map((card) => < Card
                                        key={card.no}
                                        cardNo={card.no}
                                        title={card.title}
                                        description={card.description}
                                        //tasks={card.tasks} 
                                        />)}</div>
            
        </div>
    )
}

CardList.PropTypes = {
    title : PropTypes.string.isRequired,
    cards : PropTypes.arrayOf(PropTypes.shape(CardList.PropTypes))
}