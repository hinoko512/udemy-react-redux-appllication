import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 15}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
