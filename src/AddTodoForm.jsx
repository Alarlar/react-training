import React from 'react';

function AddTodoForm() { // Это новый компнонент
    return (
        <div>
            <form>
                <label htmlFor='todoTitle'>Title</label>
                <input type='text' id='todoTitle'></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddTodoForm;