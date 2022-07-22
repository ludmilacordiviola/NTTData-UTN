import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

export default function ModalSelect({ id, closeFn = () => null, open = false }) {
  const [error, setError] = useState(false);

  const [select, setSelect] = useState({
    title: "PEpe",
    question: "Play?",
    options: ["grey", "pink", "red"]
  })

  const onClickOption = (option) => {
    if(option !== select.question){
      setError(!error)
    }
    closeFn();
  };
  
  return (
    <Dialog open={open}>
      <Box sx={{ p: 2 }}>
        <DialogTitle>{select.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              {select.question}
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {select.options.map(function (option) {
              return (
                <Button variant="contained" onClick={onClickOption(option)}>
                  {option}
                </Button>
              );
            })}
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
