import React from "react";

import TodoList from "../../components/TodoList";

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
  return <TodoList array={array} />;
};

export default Todo;
