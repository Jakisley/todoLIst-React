import Todo from './Todo/Todo.jsx';
import React from 'react';


const TodoList = (props) => {
  const { todoArray, onChangeArray, filterCondition } = props;
  let filltredArr = [...todoArray];

  if (filterCondition !== 'all') {
    filltredArr = todoArray.filter(element => element.state === filterCondition);
  }

  return (
    <section>
      {filltredArr.map((todo) => (
        <Todo
          key={todo.key}
          todo={todo}
          todoArray={todoArray}
          onChangeArray={onChangeArray}
        />
      ))}
    </section>

  );
};

export default TodoList;