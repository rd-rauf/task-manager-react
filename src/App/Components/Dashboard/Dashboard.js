import React, { Fragment } from "react";
import * as commonActions from "../../Actions/CommonActions";

export default function Dashboard(props) {
  return <Pane />;
}

export function Pane(props) {
  return <Container up={<h1>This is UP</h1>} down={<h1>This is DOWN</h1>} />;
}

export function Container(props) {
  return (
    <Fragment>
      <div>{props.up}</div>
      <div>{props.down}</div>
    </Fragment>
  );
}
