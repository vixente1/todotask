import React, { useState, useEffect, useRef } from 'react';

function Todoform(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          placeholder={props.edit ? '' : 'Add Task'}
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          autoComplete="off"
          ref={inputRef}
        />
        <button type="submit" className='todo-btn'>
          {props.edit ? '' : 'Add'}
        </button>
      </form>
  );
}

export default Todoform;
