import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

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
        <div className='mb-4'>
            <InputWithLabel
                label='title' 
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}   
            />
            <button 
                type='submit'
                onClick={handleAddTodo}
                className='mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700'
            >
            Add
            </button>
            
        </div>
    );
};

export default AddTodoForm;