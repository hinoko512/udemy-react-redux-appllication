import React, { useState } from 'react';

const App = () => {
  return (
    <div style={{"padding": "20px"}}>
      <Counter></Counter>
    </div>
  );
}

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handlePlusButton = () => {
    console.log(count)
    setCount(count+1)
  }

  const handleMinusButton = () => {
    console.log(count)
    setCount(count-1)
  }

  return(
    <React.Fragment>
      <div>count: {count}</div>
      <button onClick={handlePlusButton}>+1</button> 
      <button onClick={handleMinusButton}>-1</button> 
    </React.Fragment>   
  )
}

export default App;
