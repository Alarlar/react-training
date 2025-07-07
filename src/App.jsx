import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
          },
        });
    }, 2000);
  });

  fetchData.then((result) => {
    setTodoList(result.data.todoList);
    setIsLoading(false);
  });
}, []);


  useEffect(() => {
    if (!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
    
  const addTodo = (newTodo) => {
    setTodoList([...todoList, { ...newTodo, id: Date.now() }]); 
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

 return (
    <>
      <h1>Training Plan</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );

}

export default App;
