import React, { useState } from 'react';

export const TodoList = () => { 

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() === '') {
            return;
        }
        setTodos([...todos, inputValue]);
        setInputValue('');
    };

    const handleDel = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

return (
    <div className='todoContainer'>
       <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>添加</button>
       </div>
       {todos.map((todo, index) => (<div key={index} className='todoItem'>
        <button   onClick={()=>handleDel(index)}>删除</button>
        <div className="todo" >
            {todo}
        </div>
        </div>
       ))}
    </div>
)};