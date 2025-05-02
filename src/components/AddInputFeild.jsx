import { Grid, Button, TextField, useMediaQuery } from "@mui/material";
import { useState } from "react";
import ModelInvalidInput from "./models/ModelInvalidInput";
import ModelDoubleInput from "./models/ModelDoubleInput";
let double = 0;
const AddInputFeild = ({ addTodo, uId, todos }) => {
  const match = useMediaQuery("(min-width:600px)");
  const [inputValue, setInputValue] = useState("");
  const [invalidinputValue, setInvalidinputValue] = useState(false);
  const [dubleInputValue, setDubleInputValue] = useState(false);
  
  
  function handleAddDouble(){
    addTodo({
      id: uId(),
      title: inputValue,
      details: "وصف المهمة الجديدة",
      isFinished: false,
    });
    setInputValue("");
  }
  function handleClick() {
    double = 0;
    if (inputValue !== "") {
      todos.forEach((t) => {
        if (t.title === inputValue) {
          
          double += 1;
        }
      });
      if (double > 0) {
        setDubleInputValue(true)
      }else {
        handleAddDouble()
      }
    } else {
      setInvalidinputValue(true);
    }
  }
  
  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginTop: "30px",
        flexDirection: match ? "row" : "column-reverse",
      }}
    >
      <Grid size={{ xs: 12, sm: 4 }}>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ width: "100%", height: "100%", backgroundColor: "#99163D" }}
        >
          إضافة
        </Button>
      </Grid>
      <Grid size={{ xs: 12, sm: 8 }}>
        <TextField
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          sx={{ width: "100%", direction: "rtl" }}
          id="outlined-basic"
          label="عنوان المهمة"
          variant="outlined"
          autoFocus
        />
      </Grid>
      {/* Invalid input */}
      {invalidinputValue && <ModelInvalidInput
        show={{ show: invalidinputValue, handleShow: setInvalidinputValue }}
        
        />}

        {/* double input */}
      {dubleInputValue && <ModelDoubleInput
        show={{ show: dubleInputValue, handleShow: setDubleInputValue}}
        handleClick={handleAddDouble}
        double={double}
      />}
    </Grid>
  );
};

export default AddInputFeild;
