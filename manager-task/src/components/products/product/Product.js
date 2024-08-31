import { Typography, Card, Button } from "@mui/material";
import { useStyles } from "./Product.style";

const Product = ({
  id,
  imgSrc,
  name,
  description,
  price,
  onDelete,
  setSelectedProduct,
}) => {
  const classes = useStyles();

  const onSelectProduct = () => {
    setSelectedProduct({
      id,
      image: imgSrc,
      name,
      description,
      price,
    });
  };

  return (
    <Button
      onClick={onSelectProduct}
      className={classes.container}
      disableFocusRipple={true}
    >
      <div className={classes.detailsContainer}>
        <img src={imgSrc} className={classes.img} />
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
