import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) { // Это новый компнонент
    const [todoTitle, setTodoTitle] = useState('');

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        }
    
    function handleAddTodo(event) {
        event.preventDefault();
        console.log("Form elements:", event.target.elements);
        console.log("todoTitle", todoTitle);
        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });
        setTodoTitle('');
       
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input 
                    name='title' 
                    type='text' 
                    id='todoTitle'
                    value={todoTitle}
                    onChange={handleTitleChange}   
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodoForm;