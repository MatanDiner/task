import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  content: {
    display: "flex",
    "@media (max-width: 800px)": {
      flexDirection: "column-reverse",
    },
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
  dialogContent: {
    backgroundColor: "burlywood",
    "&::-webkit-scrollbar": {
      display: "block",
      width: 5,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "brown",
      borderRadius: 10,
    },

    "&::-webkit-scrollbar-track-piece:end": {
      background: "transparent",
      marginBottom: 10,
    },

    "&::-webkit-scrollbar-track-piece:start": {
      background: "transparent",
      marginTop: 10,
    },
  },
});
