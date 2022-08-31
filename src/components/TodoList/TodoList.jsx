import Todo from './Todo/Todo.jsx';
import React from 'react';


const TodoList = (props) => {
  const {todoArray,onChangeArray} =props;
  return (
    <section>
      {props.todoArray.map((todo) => <Todo
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