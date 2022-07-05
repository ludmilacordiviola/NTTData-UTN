import {
  Grid,
  Stack,
  Typography,
  FormControl,
  TextField,
  Button,
  Box
} from "@mui/material";

export default function SignIn() {
  return (
    <Box
    sx={{
        boxShadow: 1,
        p: 0.2
    }}
    >
        <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ m: 2 }}
        >
            <Grid item xs={4}>
                <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
                >
                <Typography variant="h4" align="center" color="primary">
                    Words English
                </Typography>
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={3}
                >
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
                        label="Email"
                        type="email"
                        variant="outlined"
                        size="small"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        size="small"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button type="submit" variant="contained">
                        Login
                        </Button>
                    </Grid>
                    </Grid>
                </FormControl>
                </Stack>
            </Grid>
        </Grid>
    </Box>
  );
}
