import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
    backgroundColor: "antiquewhite !important",
    marginTop: 20,
    flex: 1,
    height: 700,
    justifyContent: "space-between",
    "@media (max-width: 800px)": {
      minHeight: 800,
    },
  },
  img: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "aquamarine !important",
    color: "blue !important",
    borderRadius: "20px !important",
  },
});
