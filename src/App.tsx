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

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Tex the Doberman',
      age: 1,
      url: 'https://cdn.pixabay.com/photo/2019/10/08/11/10/doberman-pinscher-4534710_640.jpg',
      note: 'Crackhead'
    }
  ])

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
