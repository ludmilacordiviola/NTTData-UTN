import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Grid } from "@mui/material";
import sound from "../utils/sound";

export default function ModalListening({ title, playSound, options }) {

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
              <Button
                variant="contained"
                startIcon={<VolumeUpIcon />}
                onClick={() => sound(playSound)}
              >
                {playSound}
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
            {options.map(function (option) {
              return <Button variant="contained" onClick={onClickOption(option)}>{option}</Button>;
            })}
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
