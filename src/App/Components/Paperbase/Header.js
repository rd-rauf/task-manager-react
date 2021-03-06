import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router";

import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  appbar: {
    color: "#000000",
    backgroundColor: "#ffffff"
  },
  toolbar: {
    paddingRight: 24,
    height: "55px"
  },
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, onDrawerToggle, isAuthenticated } = this.props;
    const { anchorEl } = this.state;
    const pageTitle = this.props.location.state ? this.props.location.state.title : "";
    return (
      <React.Fragment>
        <AppBar color="primary" className={classes.appbar} position="sticky" elevation={0}>
          <Toolbar variant="regular" className={classes.toolbar}>
            <Grid container spacing={8} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs>
                <Typography color="inherit" variant="h5">
                  {pageTitle}
                </Typography>
              </Grid>
              <Grid item />
              <Grid item>
                {this.props.isAuthenticated && (
                  <Typography color="inherit" variant="body1">
                    {`${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`}
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • No alters">
                  <IconButton color="inherit">
                    <NotificationsIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton color="inherit" className={classes.iconButtonAvatar}>
                  {/* <Avatar className={classes.avatar} src="/static/images/avatar/1.jpg" /> */}
                  <AccountCircle color="primary" onClick={this.handleClick} />
                  <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </Menu>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

export default withRouter(withStyles(styles)(Header));
