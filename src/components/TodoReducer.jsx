export default function todoReducer(todos, action) {
  switch (action.type) {
    case "add": {
      const updated = [...todos, action.todo];
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    }
    case "edit": {
      const updated = todos.map((t) => {
        if (t.id == action.id) {
          return action.todo;
        } else {
          return t;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    }
    case "delete": {
      const updated = todos.filter((t) => t.id != action.id);
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    }
    case "check": {
      const updated = todos.map((t) => {
        if (t.id == action.id) {
          return action.todo;
        } else {
          return t;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    }
    case "first-load": {
      return JSON.parse(localStorage.getItem("todos"));

    }
    default: {
      console.log("no-action");
      break;
    }
  }
}
