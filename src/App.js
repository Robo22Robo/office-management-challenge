import React from 'react';
import './App.css';
import Liste from './Liste'
import Days from './Days'

function App() {
  const welcome = "Office management application!"


  return (


    <div className="App">
      <header className="App-header">


        <h1 className="App-title">{welcome}</h1>

      </header>
      <div className="Container">

        <div className="Liste">

          <Liste />
        </div>
  
      </div>
    </div>
  );
}

export default App;
