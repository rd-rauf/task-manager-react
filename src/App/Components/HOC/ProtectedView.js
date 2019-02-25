import React from 'react';
import { Switch, Route } from "react-router";
import { ProtectedRoute } from './ProtectedRoute';
import { withRouter } from 'react-router';
import { connect } from "react-redux";

import SignIn from "../../Components/SignIn/SignIn";
import Paperbase from "../../Components/Paperbase/Paperbase";

class ProtectedView extends React.Component {
  state = {
    //
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Switch>
          <Route path="/" exact component={SignIn} />
          <ProtectedRoute path="/dashboard" exact component={Paperbase} />
        </Switch>
      );
    }
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(withRouter(ProtectedView));
