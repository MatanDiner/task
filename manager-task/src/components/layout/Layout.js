import { Fragment } from "react";
import Header from "../header/Header";
import { useStyles } from "./Layout.style";
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <div className={classes.content}>{children}</div>
    </Fragment>
  );
};

export default Layout;
