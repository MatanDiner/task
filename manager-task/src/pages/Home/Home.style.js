import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  content: {
    display: "flex",
  },
  filters: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
    alignItems: "center",
    backgroundColor: "burlywood",
  },
  addBtn: {
    backgroundColor: "antiquewhite !important",
    borderRadius: "20px !important",
    fontWeight: "bold !important",
  },
  modal: {
    minWidth: "300px !important",
    height: "500px !important",
  },
});
