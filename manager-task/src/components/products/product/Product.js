import { Typography, Card, Button } from "@mui/material";
import { useStyles } from "./Product.style";

const Product = ({ imgSrc, name, desc, price }) => {
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.container }}>
      <div className={classes.detailsContainer}>
        <img src={imgSrc} className={classes.img} />
        <div>
          <Typography classes={{ root: classes.title }}>{name}</Typography>
          <Typography className={classes.desc}>{desc}</Typography>
          <Typography classes={{ root: classes.priceContainer }}>
            price: <span className={classes.price}>{price}</span>
          </Typography>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.button}>Delete</Button>
      </div>
    </Card>
  );
};

export default Product;
