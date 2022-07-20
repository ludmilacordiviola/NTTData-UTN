import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";

export default function ModalSelect({ title, question, options }) {


  const onClickOption = (option) => {
    ///option === question
  };

  return (
    <Dialog open>
      <Box sx={{ p: 2 }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              {question}
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
            {options.map(function (option) {
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
