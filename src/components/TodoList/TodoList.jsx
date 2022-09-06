import Todo from './Todo/Todo.jsx';
import React from 'react';

const TodoList = (props) => {
const { fillteredArray, onChangeArray, delElement,changeCheck} = props;

  return (
    <section>
      {fillteredArray.map((todo) => (
        <Todo
          key={todo.key}
          todo={todo}
          todoArray={fillteredArray}
          onChangeArray={onChangeArray}
          delElement={delElement}
          changeCheck={changeCheck}
        />
      ))}
    </section>

  );
};

export default TodoList;