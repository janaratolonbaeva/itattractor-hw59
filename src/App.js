import React from 'react';
import './App.css';
import Movies from "./container/Movies/Movies";
import Jokes from "./container/Jokes/Jokes";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Movies/>
        <div className="pt-5">
          <h2 className="mb-4">Jokes from Chuck Norris</h2>
          <Jokes/>
        </div>
      </div>
    </div>
  );
}

export default App;
