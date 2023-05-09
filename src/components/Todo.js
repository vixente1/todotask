import React from 'react';
import { useState } from 'react';
import Todoform from './TodoForm';
import { FaTimes } from 'react-icons/fa';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <FaTimes onClick={() => removeTodo(todo.id)} className='delete' />
          </div>
        </div>
      ))}
    </>
  );
}

export default Todo;