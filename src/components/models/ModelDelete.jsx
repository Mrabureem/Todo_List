import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModelDelete({ handleClick, show, id }) {
  const handleClose = () => {
    show.setShowDeleteModle(false);
  };
  return (
    <>
      <Dialog
        dir="rtl"
        open={show.showDeleteModle}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">هل انت متاكد</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            المهام المحذوقة لا يمكن استرجاعها
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>الغاء</Button>
          <Button
            onClick={() => {
              handleClick(id);
            }}
            autoFocus
          >
            نعم , قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
