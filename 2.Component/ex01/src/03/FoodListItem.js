import React from 'react'

const FoodListItem = ({name, quantity}) => {
  return (
        <ul>
            <li>{name} : {quantity}</li>
        </ul>
  )
}

export default FoodListItem