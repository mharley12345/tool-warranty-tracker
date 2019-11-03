import React from 'react';
import Header from "./components/Header";
import Tools from "./components/Tools";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Tools />
      </header>
    </div>
  );
}

export default App;
