import { Fragment } from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="content">{children}</div>
    </Fragment>
  );
};

export default Layout;
