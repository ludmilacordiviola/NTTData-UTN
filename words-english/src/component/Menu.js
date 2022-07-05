import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  Box,
} from "@mui/material";

export default function Menu() {
  return (
    <Box >
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Words English
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
