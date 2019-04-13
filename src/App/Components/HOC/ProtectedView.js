import React from "react";
import { withRouter, Redirect } from "react-router";
import { connect } from "react-redux";

class ProtectedView extends React.Component {
  state = {
    //
  };

  render() {
    if (this.props.isAuthenticated) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    } else {
      return <Redirect to={{ pathname: "/signin", state: { from: this.props.location } }} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.sir.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(ProtectedView));
