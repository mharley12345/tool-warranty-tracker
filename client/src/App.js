import React from 'react';
import Header from "./components/Header";
import Tools from "./components/Tools";
import './App.css';
import Add from './components/Add'
import {Route,Link} from 'react-router-dom'
import Auto from './components/Autocomplete'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
 
          
  <Header Tools={Tools}/>
 <Route to exact path="/" component={Tools}/>
  <Route   to exact path= "/search" component={Auto}/>
  <Route to exact path= "/search/:filter" component={Search}/>
  <Route to path="/add" component={Add}/>

 
    </div>
  );
}

export default App;
