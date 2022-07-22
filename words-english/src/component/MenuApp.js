import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ModalDataUser from "../component/ModalDataUser";
import ModalEmail from "../component/ModalEmail";
import ModalPassword from "../component/ModalPassword";

export default function MenuApp() {
  const [anchorEl, setAnchorEl] = useState(null);

 /*  function HamburgerMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
 */

  const [modal, setModal] = useState({
    DataUser: false,
    Email: false,
    Password: false,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickOpenModal = (text) => {
    switch (text) {
      case "DataUser":
        setModal({ ...modal, DataUser: true });
        break;
      case "Email":
        setModal({ ...modal, Email: true });
        break;
      case "Password":
        setModal({ ...modal, Password: true });
        break;
      default:
        setModal(modal);
    }
  };

  const closeFn = () => {
    setModal({
      DataUser: false,
      Email: false,
      Password: false,
    });
  };

/*    <ItemLink onClick={handleClick} to="/">
        Home
      </ItemLink>
 */
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Syllabus
            </Typography>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  onClickOpenModal("DataUser");
                }}
              >
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Edit user data
              </MenuItem>
              {modal.DataUser && (
                <ModalDataUser
                  id={"dsasdsad"}
                  closeFn={closeFn}
                  open={modal.DataUser}
                />
              )}
              <MenuItem
                onClick={() => {
                  handleClose();
                  onClickOpenModal("Email");
                }}
              >
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Edit email
              </MenuItem>
              {modal.Email && (
                <ModalEmail
                  id={"dsasdsad"}
                  closeFn={closeFn}
                  open={modal.modalEmail}
                />
              )}
              <MenuItem
                onClick={() => {
                  handleClose();
                  onClickOpenModal("Password");
                }}
              >
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Edit Password
              </MenuItem>
              {modal.Password && (
                <ModalPassword
                  id={"dsasdsad"}
                  closeFn={closeFn}
                  open={modal.modalPassword}
                />
              )}
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
