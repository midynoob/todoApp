import React, {useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });


    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input  
                            type="text"
                            value={input}
                            placeholder="Add to Do"
                            onChange={handleChange}
                            name='text'
                            className="todo-input edit"
                            ref={inputRef}
                        />
                        <button type="submit" className="todo-button edit">Update</button>
                    </>
                ): (
                    <>
                        <input  
                            type="text"
                            value={input}
                            placeholder="Add to Do"
                            onChange={handleChange}
                            name='text'
                            className="todo-input"
                            ref={inputRef}
                        />
                        <button type="submit" className="todo-button">Add todo</button>
                    </>
                    
                )}
                
            </form>
    )
}

export default TodoForm;
