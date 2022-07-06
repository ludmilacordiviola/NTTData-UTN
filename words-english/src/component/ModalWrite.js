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

export default function ModalWrite() {
  return (
    <Dialog open>
      <Box sx={{ p: 2 }}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Button variant="contained" startIcon={<VolumeUpIcon />}>
                Play sound
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
              autoFocus
              margin="dense"
              label="Text"
              type="Text"
              variant="standard"
            />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}