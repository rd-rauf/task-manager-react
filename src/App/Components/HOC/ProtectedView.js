import React from 'react';
import { withRouter } from 'react-router';
import { connect } from "react-redux";

class ProtectedView extends React.Component {
  state = {
    //
  }

  render() {
    debugger;
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
    // if (this.props.isAuthenticated) {
    //   return (
    //     <Switch>
    //       <ProtectedRoute path="/dashboard" exact component={Paperbase} />
    //     </Switch>
    //   );
    // } else {
    //   return (
    //     <Switch>
    //       <Route path="/" exact component={SignIn} />
    //     </Switch>
    //   );
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.sir.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(withRouter(ProtectedView));
