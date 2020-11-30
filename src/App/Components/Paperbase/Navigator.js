import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PublicIcon from "@material-ui/icons/Public";
import SettingsIcon from "@material-ui/icons/Settings";

import { Link } from "react-router-dom";
import MatLink from "@material-ui/core/Link";

const categories = [
  {
    id: "Overview",
    children: [{ id: "Dashboard", title: "Dashboard", path: "/dashboard", icon: <HomeIcon /> }]
  },
  {
    id: "Manage",
    children: [
      { id: "Projects", title: "Projects", path: "/projects", icon: <DnsRoundedIcon /> },
      { id: "Issues", title: "Issues", path: "", icon: <PublicIcon /> },
      { id: "Reports", title: "Reports", path: "", icon: <PermMediaOutlinedIcon /> }
    ]
  },
  {
    id: "Administration",
    children: [
      { id: "Users", title: "Users", path: "", icon: <PeopleIcon /> },
      { id: "Settings", title: "Settings", path: "", icon: <SettingsIcon /> }
    ]
  }
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: "rgba(255, 255, 255)"
  },
  itemCategory: {
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#0747a6"
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    },
    backgroundColor: "#0747a6"
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  }
});

function Navigator(props) {
  const { classes, ...other } = props;
  return (
    <Drawer variant="permanent" className={classes.drawer} {...other}>
      <List disablePadding>
        <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>Task Manager</ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}>
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, path, title }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(classes.item, classes.itemActionable, active && classes.itemActiveItem)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <MatLink component={Link} to={{ pathname: path, state: { title: title } }}>
                  {childId}
                </MatLink>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Navigator));
