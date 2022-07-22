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

export default function ModalDataUser(
  id,
  closeFn = () => null,
  open = false,
) {
  const [dataUser, setDataUser] = useState({
    id: {id},
    firstName: "",
    lastName: "",
    birthday: (new Date().getFullYear()+"-"+(("0" + (new Date().getMonth() + 1)).slice(-2))+"-"+new Date().getDate())
  });

  const handleChange = (event) => {
    setDataUser({...dataUser, [event.target.name]: event.target.value});
  };

  const onClickSend = () =>{
    closeFn();
  }

  return (
    <Dialog onClose={onClickSend} open={open}>
      <Box sx={{ p: 2 }}>
        <DialogTitle>Edit Data User</DialogTitle>
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
              value={dataUser.firstName}
              onChange={handleChange}
              autoFocus
              margin="dense"
              label="First Name"
              type="firstName"
              name="firstName"
              variant="standard"
            />
            <TextField
              value={dataUser.lastName}
              onChange={handleChange}
              autoFocus
              margin="dense"
              label="Last Name"
              type="lastName"
              name="lastName"
              variant="standard"
            />
             <TextField
              value={dataUser.birthday}
              onChange={handleChange}
              label="Birthday"
              margin="normal"
              name="birthday"
              required
              fullWidth
              type="date"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={() => onClickSend()}>
              Send
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}