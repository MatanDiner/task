import { useContext } from "react";
import { Typography, Card, Button } from "@mui/material";
import { useStyles } from "./Product.style";
import appContext from "../../../contexts/context";
import * as actionTypes from "../../../contexts/actionTypes";

const Product = ({
  id,
  imgSrc,
  name,
  description,
  price,
  onDelete,
  creationDate,
}) => {
  const classes = useStyles();
  const { dispatch } = useContext(appContext);

  const onSelectProduct = () => {
    const selectedProduct = {
      id,
      image: imgSrc,
      name,
      description,
      price,
    };
    dispatch({ type: actionTypes.SET_SELECTED_ITEM, payload: selectedProduct });
  };

  return (
    <Button
      onClick={onSelectProduct}
      className={classes.container}
      disableFocusRipple={true}
    >
      <div className={classes.detailsContainer}>
        <div>
          <img src={imgSrc} className={classes.img} />
          <Typography className={classes.creationDate}>
            {creationDate}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography className={classes.title}>{name}</Typography>
          <Typography className={classes.desc}>{description}</Typography>
          <Typography className={classes.priceContainer}>
            price: <span className={classes.price}>{price}</span>
          </Typography>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button onClick={(e) => onDelete(e, id)} className={classes.button}>
          Delete
        </Button>
      </div>
    </Button>
  );
};

export default Product;
