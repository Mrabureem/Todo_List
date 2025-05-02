import { v4 as uId } from "uuid";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Todo from "./Todo";
import AddInputFeild from "./AddInputFeild";
import { useState, useEffect, useReducer } from "react";
import todoReducer from "./TodoReducer";

const todosList = [
  {
    id: uId(),
    title: "",
    details: "",
    isFinished: false,
  },
];

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);
  const [toggle, setToggle] = useState("all");
  let todosRender = todos;
  if (toggle == "finished") {
    todosRender = todos.filter((t) => t.isFinished);
  } else if (toggle == "not-finished") {
    todosRender = todos.filter((t) => !t.isFinished);
  } else {
    todosRender = todos;
  }

  const todoListJSX = todosRender.map((t) => (
    <Todo
      key={t.id}
      todo={t}
      actions={{ delete: handleDelete, edit: handleEdit, check: handleCheck }}
    />
  ));

  function handleAddTodo(todo) {
    dispatch({
      type: "add",
      todo: todo,
    });
  }
  function handleDelete(todoId) {
    dispatch({
      type: "delete",
      id: todoId,
    });
  }
  function handleEdit(todo, id) {
    dispatch({
      type: "edit",
      todo: todo,
      id: id,
    });
  }
  function handleCheck(todo, id) {
    dispatch({
      type: "check",
      todo: todo,
      id: id,
    });
  }

  useEffect(() => {
    dispatch({
      type: "first-load",
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" sx={{ fontWeight: "500" }}>
            مهامي
          </Typography>
          <Divider />
          {/* filter buttons */}
          <ToggleButtonGroup sx={{ marginTop: "40px" }}>
            <ToggleButton
              onClick={() => {
                setToggle("not-finished");
              }}
            >
              غير منجز
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setToggle("finished");
              }}
            >
              منجز
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setToggle("all");
              }}
            >
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {/* ======filter buttons=== */}

          {/* ToDo List */}
          {todoListJSX}
          {/* =======ToDo List===== */}

          <AddInputFeild addTodo={handleAddTodo} uId={uId} todos={todos}/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TodoList;
