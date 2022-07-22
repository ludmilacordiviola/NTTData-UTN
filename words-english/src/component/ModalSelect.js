import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function ModalSelect({
  id,
  closeFn = () => null,
  open = false,
}) {
  const [error, setError] = useState(false);

  const [select, setSelect] = useState({
    title: "Select the correct option/ Selecciona la opcion correcta",
    question: "GREY",
    options: ["grey", "pink", "red"],
  });

  const onClickOption = (option) => {
    if (option !== select.question) {
      setError(!error);
    }
    closeFn();
  };

  return (
    <Dialog onClose={onClickOption} open={open}>
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
              <Typography
                component={"p"}
                variant="body2"
                color="text.secondary"
              >
                {select.question}
              </Typography>
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
            {select.options.map(function (option, index) {
              return (
                <Button
                  key={index}
                  variant="contained"
                  onClick={() => onClickOption(option)}
                >
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
