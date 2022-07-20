import { Button, FormControl, Grid, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { getDataUser, getLogaut } from "../utils/userGet"

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignIn = () => {
    getLogaut();
    console.log("------------")
    ///getDataUser({"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDVjODRiMjdmODlhZDBmOGE1NDI5YyIsImlhdCI6MTY1ODI0MTM1OCwiZXhwIjoxNjU4MjQyMjU4fQ.WUx_zhIsoUkins24skEW-60vl6-dnaTg38vCqAHFHE8"});
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Words English
          </Typography>
          <FormControl>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={4}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  type="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Button onClick={onClickSignIn} type="submit" variant="contained" color="success" startIcon={<SendIcon />}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
