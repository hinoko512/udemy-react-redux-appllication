import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5 },
    { name: "noname"}
  ]
  return (
    <div style={{"padding": "20px"}}>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}></User>
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>Hi! I am {props.name} and {props.age} yaers old</div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
