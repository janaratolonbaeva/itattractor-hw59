import React from 'react';
import './App.css';
import Movies from "./container/Movies/Movies";
import Jokes from "./container/Jokes/Jokes";

function App() {
  return (
    <div className="App">
      <Movies/>
      <Jokes/>
    </div>
  );
}

export default App;
