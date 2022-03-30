import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
// import cards from './data.json'

// 카드 배열 분리, To do, Doing, Done state 보고 판단.
// 분리는 Filter 사용. map, 새로운 배열 생성

const KanbanBoard = () => {
    const [cards, setCards] = useState([]);

    useEffect(async() => {
        try {
            // fetch는 비동기니까 await 써줘야
            const response = await fetch('/api/card', {
              method: 'get',
              headers: {
                'Accept': 'application/json'
              },
            })
            
            if(!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
            }
      
            const json = await response.json();
      
            if(json.result !== 'success') {
              console.log("error: ", json.message);
              throw new Error(`${json.result} ${json.message}`); 
            }
      
            setCards(json.data);
      
            }catch(err) {
              console.log(err);
            }
    },[])

    // const result = [0,1,2,3,4].filter((e) => e % 2 === 0);
    // console.log(result)

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To do'} cards = {cards.filter(e => e.status === 'ToDo')}/>
            <CardList title={'Doing'} cards = {cards.filter(e => e.status === 'Doing')} />
            <CardList title={'Done'} cards = {cards.filter(e => e.status === 'Done')} />
        </div>
    )
}

export default KanbanBoard