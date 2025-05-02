import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModelInvalidInput({ show}) {
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
        <DialogTitle id="alert-dialog-title">هذا العنوان غير صالح</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            من فضلك ادخل عنوان صالح للمهمة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>موافق</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
