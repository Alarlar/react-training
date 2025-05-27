import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
  JSON.parse(localStorage.getItem('savedTodoList')) || []
  );
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
    
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]); 
  }

 return (
    <>
      <h1>Training Plan</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </>
  );

}

export default App;
