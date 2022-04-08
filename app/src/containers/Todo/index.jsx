import React from "react";

import Top from "../../components/Top";
import TodoList from "../../components/TodoList";
import Bottom from "../../components/Bottom";

const array = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor",
  },
  {
    id: 3,
    text: "Lorem ipsum",
  },
];

const Todo = () => {
  return (
    <>
      <Top />
      <TodoList array={array} />
      <Bottom />
    </>
  );
};

export default Todo;
