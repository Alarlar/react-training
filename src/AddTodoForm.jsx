import React from 'react';

function AddTodoForm(props) { // Это новый компнонент
    function handleAddTodo(event) {
        event.preventDefault();
        console.log("Form elements:", event.target.elements);
        const todoTitle = event.target.elements.title?.value || "";
        console.log("todoTitle", todoTitle);
        props.onAddTodo(todoTitle);
        event.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input name='title' type='text' id='todoTitle'></input>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodoForm;