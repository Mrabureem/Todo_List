import { Grid, IconButton, useMediaQuery } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ModelDelete from "./models/ModelDelete";
import { useState } from "react";
import ModelEdit from "./models/ModelEdit";

export default function Todo({ todo, actions }) {
  const match = useMediaQuery("(min-width: 900px)");
  const [showDeleteModle, setShowDeleteModle] = useState(false);
  const [showEditModle, setShowEditModle] = useState(false);

  return (
    <Grid
      container
      sx={{
        marginTop: "30px",
        padding: "10px",
        backgroundColor: "#252F88",
        desplay: "flex",
        alignItems: "center",
        borderRadius: "6px",
        boxShadow: "0 5px 10px 0 black",
        flexDirection: match ? "row" : "column-reverse",
      }}
    >
      {/* icon */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: match ? "0px" : "10px 0",
        }}
      >
        {/* delete button */}
        <IconButton
          onClick={() => {
            setShowDeleteModle(true);
          }}
          className="delet"
          aria-label="delete"
          sx={{
            backgroundColor: "white",
            color: "red",
            marginRight: "10px",
          }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
        {/* =====delete button==== */}

        {/* edit button */}
        <IconButton
          onClick={() => {
            setShowEditModle(true);
          }}
          className="edit"
          aria-label="edit"
          sx={{
            backgroundColor: "white",
            color: "#252F88",
            marginRight: "10px",
          }}
        >
          <EditOutlinedIcon />
        </IconButton>
        {/* ====edit button==== */}

        {/* check button */}
        <IconButton
          onClick={() => {
            todo.isFinished = !todo.isFinished;
            actions.check(todo, todo.id);
          }}
          className="check"
          aria-label="check"
          data-check={todo.isFinished}
          sx={{
            backgroundColor: todo.isFinished ? "green" : "white",
            color: todo.isFinished ? "white" : "green",
            marginRight: "10px",
          }}
        >
          <CheckOutlinedIcon />
        </IconButton>
        {/* ====check button==== */}
      </Grid>
      {/* details */}
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{ textAlign: match ? "right" : "center", color: "white" }}
      >
        <h3>{todo.title}</h3>
        <p>{todo.details}</p>
      </Grid>
      {showDeleteModle && <ModelDelete
        id={todo.id}
        handleClick={actions.delete}
        show={{ showDeleteModle, setShowDeleteModle }}
      />}
      {showEditModle && (
        <ModelEdit
          id={todo.id}
          todoEdit={todo}
          handleClick={actions.edit}
          show={{ showEditModle, setShowEditModle }}
        />
      )}
    </Grid>
  );
}
