import React from 'react';

import './App.css';
/* import Demo from './components/Demo';
import Demo1 from './components/Demo1';
import Parent from './components/Parent';
import Sample from './components/Sample';
import TodoList from './components/ToDoList'; */

import Stocks from './components/Stocks';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);


function App() {
  return (
    <div className="App">
    <h1>Stocks App</h1>
      {
        /* 
          <Demo> </Demo>
          <Demo1> </Demo1>
          <Parent></Parent>
          <Sample></Sample> 
          <TodoList></TodoList>
        */
      
      
      <Stocks></Stocks>
      
      
      }
    </div>
  );
}

export default App;
