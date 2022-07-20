import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ModalEmail() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(email=event.target.value);
  };

  const onClickSend = () =>{
  }

  return (
    <Dialog open>
      <Box sx={{ p: 2 }}>
        <DialogTitle>Edit Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <TextField
              value={text}
              onChange={handleChange}
              autoFocus
              margin="dense"
              label="Email"
              type="email"
              name="email"
              variant="standard"
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={onClickSend}>
              Send
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}