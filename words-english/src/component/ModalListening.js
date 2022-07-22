import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

export default function ModalListening({
  id,
  closeFn = () => null,
  open = false,
}) {
  const [error, setError] = useState(false);

  const [listening, setListening] = useState({
    title: "PEpe",
    playSound: "Play",
    options: ["grey", "pink", "red"],
  });

  const sound = ()=>{speechSynthesis.speak(new SpeechSynthesisUtterance(listening.playSound))}

  const onClickOption = (option) => {
    if (option !== listening.playSound) {
      setError(!error);
    }
    closeFn();
  };

  return (
    <Dialog onClose={onClickOption} open={open}>
      <Box sx={{ p: 2 }}>
        <DialogTitle>{listening.title}</DialogTitle>
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
                onClick={() => sound(listening.playSound)}
              >
                {listening.playSound}
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
            gap={2}
          >
            {listening.options.map(function (option, index) {
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
