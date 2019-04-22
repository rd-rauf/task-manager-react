import React from 'react';
import * as commonActions from "../../Actions/CommonActions";

export default function Dashboard(props) {
  commonActions.SetPageTitle("Dashboard");
  return (
    <h1>This is the Dashboard</h1>
  )
}