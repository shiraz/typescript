import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((td) => (
        <li key={td.id}>
          <span>{td.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, td.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};
