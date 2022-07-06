import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function ModalListening() {
  return (
    <Dialog open>
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
                Lorem
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
          <Button variant="contained">Option 1</Button>
          <Button variant="contained">Option 2</Button>
          <Button variant="contained">Option 3</Button>
          <Button variant="contained">Option 4</Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
