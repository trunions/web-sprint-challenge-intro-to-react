import React, { useState, useEffect} from 'react';
import Character from './components/Character'
import axios from 'axios'
import './App.css';

const App = () => {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacter(res.data)
      
    })
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character props={character} />
    </div>
  );
}

export default App;
