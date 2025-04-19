import React from 'react';
import { useState } from 'react';
import './App.css';
import ToplanList from './toplanList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('New Todo')
 return (
    <div>
      <h1>Training Plan</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <ToplanList />
    </div>
  );
}

export default App;
