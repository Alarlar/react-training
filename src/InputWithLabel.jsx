import React, { useRef, useEffect } from 'react';

function InputWithLabel ( {children, todoTitle, handleTitleChange} ) {
    
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    });
        
        return (
    <>
        <label htmlFor='todoTitle'>{children}</label>
        <input 
            type='text' 
            id='todoTitle'
            name='title'
            value={todoTitle}
            onChange={handleTitleChange}
            ref={inputRef}
        />
    </>
    );
}

export default InputWithLabel;