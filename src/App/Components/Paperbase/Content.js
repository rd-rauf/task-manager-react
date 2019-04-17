import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import { Switch, Route } from "react-router";
import ProtectedRoute from "../../Components/HOC/ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";

const styles = theme => ({
  paper: {
    maxWidth: "100%",
    margin: "auto",
    overflow: "hidden"
  },
  contentWrapper: {
    margin: "20px 10px"
  }
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
