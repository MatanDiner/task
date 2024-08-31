import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: 20,
    backgroundColor: "coral",
  },
  img: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    display: "flex",
    padding: "10px 10px",
    color: "white",
  },
  title: {
    fontSize: 20,
    color: "aqua",
  },
  desc: {
    paddingLeft: 10,
  },
  priceContainer: {
    color: "chartreuse",
    fontSize: 20,
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
  },
  button: {
    backgroundColor: "bisque",
  },
});
