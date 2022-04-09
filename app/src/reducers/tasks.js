const TASKS = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet.",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Lorem ipsum",
    isCompleted: false,
  },
];

const tasks = (state = TASKS, { type, id, text, isCompleted = false }) => {
  switch (type) {
    case "ADD_TASK":
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case "DELETE_TASK":
      return [...state].filter(task => task.id !== id);
    case "COMPLETE_TASK":
      return [...state].map(task => {
        if (task.id === id)
          task.isCompleted = !task.isCompleted
        return task;
      });
    case "CLEAR_TASKS":
      return [];
    default:
      return state;
  }
}

export default tasks;