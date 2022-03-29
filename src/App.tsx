import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

interface IState{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([])

people.map(person => {
  return person.age
})

  return (
    <div className="App">
      <h1>Dogs invited to my Party!</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
