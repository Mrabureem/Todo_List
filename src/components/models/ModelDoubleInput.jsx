import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModelDoubleInput({ show, handleClick, double }) {
  const handleClose = () => {
    show.handleShow(false);
  };
  return (
    <>
      <Dialog
        dir="rtl"
        open={show.show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">هذا المهمة متكررة</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            هذه المهمة متكررة عدد ({double})  من المرات هل انت متاكد من الاضافة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>إالغاء</Button>
          <Button
            onClick={() => {
              handleClick();
              show.handleShow(false);
            }}
            autoFocus
          >
            نعم , قم بالاضافة
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
