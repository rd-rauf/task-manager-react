import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Formik, ErrorMessage } from "formik";
import * as asyncActions from "../../Actions/SignInAction";
import * as yup from "yup";
import "./SignIn.scss";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  input: {
    height: "30px",
    lineHeight: "30px",
    borderRadius: "5px",
    border: "1px solid gray"
  }
});

class SignIn extends React.Component {
  handleSubmit = (values, actions) => {
    this.props.signInAction(values.email, values.password);
  };

  render() {
    const { classes, email, password, networkAccess, isAuthenticated, userAuthFailed } = this.props;
    if (isAuthenticated) {
      return <Redirect to={{ pathname: "/dashboard", state: { title: "Dashboard" } }} />;
    }
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {networkAccess == false && <h3 className="network-access_msg">Network Access Error!</h3>}
          <Formik
            initialValues={(email, password)}
            onSubmit={(values, actions) => this.handleSubmit(values, actions)}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .required("Email is required")
                .email("A valid email must be provided"),
              password: yup
                .string()
                .required("Password is required")
                .min(8, "Password must be of 8 characters minimum")
                .max(100, "Password must be of 100 characters maximum")
            })}
            render={({ values, errors, status, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <div>{/* {JSON.stringify(errors)} */}</div>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                  />
                  <ErrorMessage name="email" className="error-message" component="div" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="password" component="div" className="error-message" />
                </FormControl>
                {userAuthFailed && <h3 className="error-message">Invalid username/password!</h3>}
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  Sign in
                </Button>
              </form>
            )}
          />
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.sir.isAuthenticated,
    networkAccess: state.sir.networkAccess,
    userAuthFailed: state.sir.userAuthFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInAction: (email, password) => {
      dispatch(asyncActions.signInAction(email, password));
    }
  };
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
