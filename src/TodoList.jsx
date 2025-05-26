import React from 'react';
import TodoListItem from './TodoListItem';

// const trainingPlan = [
//     { id: 1, title: "Sleep"},
//     { id: 2, title: "Train"},
//     { id: 3, title: "Make $"}
//   ];

function TodoList( {todoList} ) {
    return (
        <div>
            <ul> 
                {todoList.map((todo) => (
                   <TodoListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
} 

export default TodoList;