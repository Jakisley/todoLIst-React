import Todo from './Todo/Todo.jsx';
import React from 'react';

const TodoList = (props) => {
  const { fillteredArray, delElement, changeCheck, doubleClickInput, onblur, handleKeyDownToDoInput } = props;

  return (
    <section>
      {fillteredArray.map((todo) => (
        <Todo
          key={todo.key}
          todo={todo}
          delElement={delElement}
          changeCheck={changeCheck}
          doubleClickInput={doubleClickInput}
          onblur={onblur}
          handleKeyDownToDoInput={handleKeyDownToDoInput}
        />
      ))}
    </section>

  );
};

export default TodoList;