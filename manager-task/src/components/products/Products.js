import { useContext } from "react";
import Product from "./product/Product";
import { useStyles } from "./Products.style";
import * as actionTypes from "../../contexts/actionTypes";
import AppContext from "../../contexts/context";

const Products = () => {
  const classes = useStyles();
  const {
    state: { products },
    dispatch,
  } = useContext(AppContext);

  const onDelete = (e, removedId) => {
    e.stopPropagation();
    dispatch({ type: actionTypes.DELETE_ITEM, payload: removedId });
  };

  return (
    <div className={classes.container}>
      {products.map(({ id, image, name, price, description, creationDate }) => (
        <Product
          key={id}
          id={id}
          imgSrc={image}
          name={name}
          description={description}
          price={price}
          creationDate={creationDate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Products;
