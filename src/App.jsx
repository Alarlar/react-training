import React from 'react';
import './App.css';
import ToplanList from './toplanList';
import AddTodoForm from './AddTodoForm';

function App() {
 return (
    <div>
      <h1>Training Plan</h1>
      <AddTodoForm />
      <ToplanList />
    </div>
  );
}

export default App;
