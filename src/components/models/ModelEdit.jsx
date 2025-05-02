import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function ModelEdit({ handleClick, show, todoEdit, id }) {
  const [todo, setTodo] = useState(todoEdit);
  const handleClose = () => {
    show.setShowEditModle(false);
  };
  return (
    <>
      <Dialog
        dir="rtl"
        open={show.showEditModle}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">هل انت متاكد</DialogTitle>
        <DialogContent>
          <TextField
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
            sx={{ width: "300px", direction: "rtl", marginTop: "30px" }}
            label="عنوان المهمة"
          />
          <TextField
            value={todo.details}
            onChange={(e) => {
              setTodo({ ...todo, details: e.target.value });
            }}
            sx={{ width: "300px", direction: "rtl", marginTop: "30px" }}
            label="وصف المهمة"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>الغاء</Button>
          <Button
            onClick={() => {
              handleClick(todo, id);
              handleClose();
            }}
            autoFocus
          >
            نعم , قم بالتعديل
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
