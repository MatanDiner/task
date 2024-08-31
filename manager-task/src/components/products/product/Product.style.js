import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: "20px !important",
    backgroundColor: "coral !important",
    "&:focus": {
      border: "1px solid blue",
    },
  },
  img: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    display: "flex",
    padding: "10px 10px",
    color: "white",
    flex: 1,
  },
  title: {
    fontSize: "20px !important",
    color: "aqua",
  },
  desc: {
    paddingLeft: 10,
  },
  priceContainer: {
    color: "chartreuse",
    fontSize: "20 !important",
    fontWeight: 700,
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    color: "cyan",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "end",
    padding: 10,
    boxSizing: "border-box",
    height: "100%",
  },
  button: {
    backgroundColor: "bisque !important",
  },
  details: {
    textAlign: "left",
    paddingLeft: 10,
  },
});
