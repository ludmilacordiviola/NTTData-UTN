import {
  Grid,
  CssBaseline,
  Box,
  TextField,
  Button,
  Typography
} from "@mui/material";
import { useState } from "react";
import { axios } from "axios";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    birthday: (new Date().getFullYear()+"-"+(("0" + (new Date().getMonth() + 1)).slice(-2))+"-"+new Date().getDate()),
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      birthday: userInfo.birthday,
      email: userInfo.email,
      password: userInfo.password
    };
    axios.post("http://localhost:5000/api/users/register", userData)
    .then((response) => {
      console.log(response.status);
      console.log(response.userInfo.token);
    });
  };

  const onClickSignUp = () => {
    alert(userInfo.firstName);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item={true}
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userInfo.firstName}
                onChange={handleChange}
                margin="normal"
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userInfo.lastName}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
            <TextField
              value={userInfo.birthday}
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
            <TextField
              defaultValue={userInfo.email}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              value={userInfo.password}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              autoFocus
              autoComplete="current-password"
              variant="filled"
            />
            <Button
              type="submit"
              onClick={onClickSignUp}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
