import Todo from './Todo/Todo.jsx';
import React from 'react';


const TodoList = (props) => {
  const {todoArray,onChangeArray,filter} =props;
  return (
    <section>
      {filter.map((todo) => <Todo
        key={todo.key}
        id={todo.key}
        text={todo.description}
        state={todo.state}
        todoArray = {todoArray}
        onChangeArray ={onChangeArray}
      />)}


    </section>

  );
};

export default TodoList;