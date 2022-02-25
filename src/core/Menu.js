import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "../auth/auth-helper";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  active: {
    color: "#ff4081",
  },
  inactive: {
    minHeight: "#ffffff",
  },
}));

const Menu = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Expense Tracker
        </Typography>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          <IconButton aria-label="Home">
            <HomeIcon />
          </IconButton>
        </NavLink>

        {auth.isAuthenticated() && (
          <span>
            <NavLink to={"/expenses/all"}>
              <Button style={{ color: "inherit" }}>Expenses</Button>
            </NavLink>
            <NavLink to={"/expenses/reports"}>
              <Button style={{ color: "inherit" }}>Reports</Button>
            </NavLink>
          </span>
        )}

        {!auth.isAuthenticated() && (
          <span>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <Button>Sign up</Button>
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <Button>Sign In</Button>
            </NavLink>
          </span>
        )}
        {auth.isAuthenticated() && (
          <span>
            <NavLink
              to={"/user/" + auth.isAuthenticated().user._id}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <Button>My Profile</Button>
            </NavLink>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
