import React from 'react';
import './TodoItem.css';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
  <li className="list">
    <div
      className={completed ? "task done" : "task"}
      onClick={onToggle}
    >
      {name}
      <span onClick={onDelete}> X </span>
    </div>
  </li>
);

export default TodoItem;