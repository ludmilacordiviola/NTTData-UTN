import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ModalWrite({ id, closeFn = () => null, open = false }) {
  const [write, setWrite] = useState({
    title: "PEpe",
    playSound: "Play",
    text: "",
  });

  const sound = ()=>{speechSynthesis.speak(new SpeechSynthesisUtterance(write.playSound))}

  const onClickSend = () => {
    if (write.text === write.playSound) return "Bee";
    closeFn();
  };

  return (
    <Dialog onClose={onClickSend} open={open}>
      <Box sx={{ p: 2 }}>
        <DialogTitle>{write.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Button
                variant="contained"
                startIcon={<VolumeUpIcon />}
                onClick={() => sound(write.playSound)}
              >
                {write.playSoundplaySound}
              </Button>
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
              value={write.text}
              autoFocus
              margin="dense"
              label="Text"
              type="Text"
              variant="standard"
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={onClickSend}
            >
              Send
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
