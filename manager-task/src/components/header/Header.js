import { Typography } from "@mui/material";
import { useStyles } from "./Header.style";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h4" component="h4">
        My Store
      </Typography>
    </div>
  );
};

export default Header;
