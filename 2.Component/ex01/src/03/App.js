import React from 'react'

const App = function() {
    const foods = [{
        no : 1,
        name : 'Bread',
        quantity : 40
      },{
        no : 2,
        name : 'Egg',
        quantity : 80
      },{
        no : 3,
        name : 'Milk',
        quantity : 50
      }]
  
    return (
        <div id="App">
        <FoodList foods={this.foods} />
    </div>
  )
}

export default App